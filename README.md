> tags: Nx, NestJs, React, CQRS, Event Sourcing, EventStore, Microservices, Microfrontends, Single-Spa, SystemJS, Server-sent events (SSE), Websockets (Socket.io), Redis (as global event bus, as queue), Bull, Prisma, SQLite, MongoDB, Google Cloud Storage, Webpack, Sharp, PassportJs...

# Portfolio - Headless CMS

## Overview

Welcome to the monorepo (Nx) with the author's portfolio project, the Headless CMS. This project aims to showcase the author's skills and expertise or their absense :)

The project covers the following business domains:

- Templates -> define Pages structure
- Pages -> root peaces of content based on chosen template
- Assets management
- Blog -> as a showcase

> To speed up development, author has excluded some typical CMS features like project management, content multilanguage support, content versioning, user management, settings, etc.

## Status

The project is currently under construction. As of 10.06.23 (day 10 since I started code writing), the progress is follows:

| Module                           | Progress |
| -------------------------------- | -------- |
| Managemenet API                  | 91%      |
| Delivery API                     | 32%      |
| Frontend for Management API      | 5%       |
| Frontend for Delivery API (Blog) | 5%       |

Stay tuned :)

## Installation

Project requires [Node.js](https://nodejs.org/) v18+ to run. If you have nvm package installed, then:

```sh
nvm use
```

Install dependencies:

```sh
npm install
```

Run docker container with EventStore:

```sh
docker run --name esdb-node -it -p 2113:2113 -p 1113:1113 eventstore/eventstore:22.10.1-alpha-arm64v8 --insecure --run-projections=All --enable-atom-pub-over-http
```

Run docker container with Redis:

```sh
docker run --name my-redis -p 6379:6379 -d redis
```

Generate databases and sync shemas:

```sh
npx nx run-many --target=db-push --projects=assets-write-model,authentication-write-model,pages-read-model,templates-pages-write-model --parallel=4
```

Generate prisma types:

```sh
npx nx run-many --target=generate --projects=assets-write-model,authentication-write-model,pages-read-model,templates-pages-write-model --parallel=4
```

Don't forget to create '.local.env' file at the root directory. Check out its example in './local-env.txt'.

To launch all microservices locally:

```sh
npx nx run-many --target=serve --all --maxParallel=20
```

## Backend Architecture

### Big Picture

Author followed mainstream and implemented a reactive event-driven architecture based on CQRS pattern. To facilitate microservices communication, author chose Redis as global event bus, which supports pub-sub and is simple to maintain. Thanks to event bus we have a lower coupling between microservices (that we all so crazy about). Additionally, it enables the implementation of distributed transactions using the choreography saga pattern.

Here is a big picture of all microservices and their relations:

> [ BIG PICTURE ]

The Headless CMS backend consists of two APIs: Management API and Delivery API.

Delivery API is pretty simple: it is public and serves only for GET requests of published pages. It points to Pages microservice which fetches already denormalised pages from MongoDB, so it should be quick.

Managament API is more interesting though, it is not publicly accessable (hello Authentication guard) and serves for managing Pages, Templates and Assets by CMS itself.

### Gateways

Each API has its own Gateway (also known as BFF or Aggregation).

> [PICTURE WITH API GATEWAYS]

In this case, Gateways serves the following:

1. keep things simple for frontend, no need to know about all the microservices and keep tracking their addresses
2. Authentication guard (for Management API only)
3. Separation of concerns - CMS doesn't need the functionality of the Delivery API, while client applications don't need Management API

> there could be more things like monitoring, obsevability, threat protection, load balancer, logging, etc. but author has limited resources on this project

### Pages service

Let's explore the inner workings of the Pages service in more detail. In this project, the author has implemented CQRS (Command Query Responsibility Segregation) pattern along with Event Sourcing.

By leveraging Event Sourcing and the EventStore projections, the Delivery API benefits from the ability to have multiple read models. For instance, MongoDB is utilized to serve published pages rapidly, while ElasticSearch enables quick search functionality on those published pages.

Here is authour's illustration of actual implementation:

> [ Pages PICTURE ]

#### Dealing with eventual consistency

Reactive architecture brings us a challenge - eventual consistency, which can potentially impact user experience. Author personally suffers each time when he pays taxes and sees them marked as unpaid even after refreshing the page multiple times. It's frustrating, to say the least. :)

To fight this issue, the author decided to sign each vital request on the client side with a unique request id. This enables the backend to send an event to the client, indicating the status of the request (resolved or rejected).

The client can match the received event with the original request and enhance the user experience by providing more relevant and detailed feedback. (Author will use a Snackbar component with status messages for that.)

> [ SSE aka Notification PICTURE ]

> For emitting events back to the client, author utilised server-sent events (EventSource browser web API), though for production-ready projects, author would proceed with websockets, due to the limitations of EventSource API.

### Templates and Assets Manager services

Both Templates and Assets share the same architecture based on CQRS pattern, though without Event Sourcing. Since these services are used by Management API only, there is no need in optimising the delivery part.

> [ Templates PICTURE ]

### Assets handling

To handle assets, the author opted for the Google Storage service with 2 separate buckets: one for public access and another for internal intercommunication. Microservices leverage the internal bucket by sharing the blob name rather than files themselves.

Additionally, in order to handle high loads and ensure the Assets Manager availability, the author implemented a Redis-based queue using the Bull package, while CPU-intensive image optimisation jobs are delegated to a dedicated service based on Sharp.js, which is powered by the blazingly fast image processing library 'libvips'.

Here is an illustration of asset uploading process:

> [ Assets PICTURE ]

## Frontend Architecture

### Big Picture

To bring some challenge, the author decided to leverage Microfrontends, with a dedicated application for each domain. For routing, the author used 'single-spa' framework and its 'single-spa-layout' engine. As as a module loader, author chose in-browser ES modules with SystemJS and import maps.

To handle global components like Notification snackbar or Menu, author provides MFEs with a global RxJs observable (event bus) instance during their registration, which enables MFEs intercommunication.

> [ BIG PICTURE ]

### Page 'editor kick-out feature'

To avoid the situation when the same page is edited simultaniously be sevaral different users, the author opted to websocket protocol. It allows server to know exactly when current editor finishes editting page even in such edge cases like internet disconnection or elictricity failure on user side.

Here is a simple illustration of editor kick-out feature:

> [ kick out PICTURE ]

## Folder Structure

Author used a typical Nx workspace structure with "apps" and "libs". Hence Nx allows to quicly generate them.

As Nx suggests:

> A common mental model is to see the application as 'containers' that link, bundle and compile functionality implemented in libraries for being deployed. As such, if we follow a 80/20 approach: place 80% of your logic into the libs/ folder, and 20% into apps/

## Summary

...

## License

The project is distributed under the MIT license.
