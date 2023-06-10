> tags: Nx, NestJs, React, CQRS, Event Sourcing, EventStore, Microservices, Microfrontends, Single-Spa, SystemJS, Server-sent events (SSE), Websockets (Socket.io), Redis (as global event bus, as queue), Bull, Prisma, SQLite, MongoDB, Google Cloud Storage, Webpack, Sharp, PassportJs...

# Portfolio - Headless CMS

## Overview

Welcome to the Nx monorepo with the author's portfolio project, the Headless CMS. This project aims to showcase the author's skills and expertise or their absense :)

The project covers the following business domains:

- Templates -> define Pages structure
- Pages -> root peaces of content based on chosen template
- Assets management
- Blog -> as a showcase

> To speed up development, author has excluded some typical CMS features like project management, content multilanguage support, content versioning, user management, settings, etc.

## Status

The project is currently under construction. As of 10.06.23 (day 10 since I started code writing), the progress is follows:

| Module          | Progress |
| --------------- | -------- |
| Managemenet API | 91%      |
| Delivery API    | 30%      |
| Frontend        | 5%       |

Stay tuned :)

## Installation

Project requires [Node.js](https://nodejs.org/) v18+ to run.

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

To launch all microservices locally:

```sh
npx nx run-many --target=serve --all --maxParallel=20
```

## Backend Architecture

The Headless CMS consists of two APIs: Management API and Delivery API.

Delivery API is pretty simple: it is public and serves only for GET requests of published pages. It points to Pages microservice which fetches already denormalised pages from MongoDB, so it should be quick.

Managament API is more interesting though, it is not publicly accessable (includes an Authentication guard) and serves for managing Pages, Templates and Assets by CMS itself.

Each API has its own Gateway (also known as BFF or Aggregation).

> [PICTURE WITH API GATEWAYS]

In this case, Gateways serves the following:

1. keep things simple for frontend, no need to know about all the microservices and keep tracking their addresses
2. Authentication guard (for Management API only)
3. Separation of concerns - CMS doesn't need the functionality of the Delivery API, while client applications don't need Management API

> there could be more things like monitoring, obsevability, threat protection, load balancer, logging, etc. but author has limited resources

### Big Picture

> [ BIG PICTURE ]

### Pages service

Implemented with CQRS-ES pattern

> [ Pages PICTURE ]

#### Dealing with eventual consistency

> [ SSE aka Notification PICTURE ]

### Templates service

Implemented with CQRS pattern

> [ Templates PICTURE ]

### Assets Manager service

> [ Assets PICTURE ]

## Frontend Architecture

### Big Picture

> [ BIG PICTURE ]

### Page 'editor kick-out feature'

> [ kick out PICTURE ]

## Folder Structure

portfolio
├── apps
│   ├── be-api-gateway-delivery
│   ├── be-api-gateway-management
│   ├── be-assets-manager
│   ├── be-authentication
│   ├── be-image-processing
│   ├── be-pages
│   └── be-templates
└── libs
   ├── be-assets-manager
   │   ├── constants
   │   ├── dtos
   │   ├── types
   │   └── utility
   ├── be-authentication
   │   ├── constants
   │   ├── decorators
   │   ├── dtos
   │   ├── types
   │   └── utility
   ├── be-event-store
   ├── be-global-event-bus
   ├── be-image-processing
   │   ├── constants
   │   ├── types
   │   └── utility
   ├── be-pages
   │   ├── constants
   │   ├── dtos
   │   ├── types
   │   └── utility
   ├── be-queue
   ├── be-templates
   │   ├── constants
   │   ├── dtos
   │   ├── types
   │   └── utility
   ├── common
   │   ├── constants
   │   ├── dtos
   │   ├── exception-filtres
   │   └── utility
   ├── notifications
   │   ├── constants
   │   └── types
   ├── prisma-clients
   │   ├── assets-write-model
   │   ├── authentication-write-model
   │   ├── pages-read-model
   │   └── templates-pages-write-model
   └── storage

## Summary

...

## License

MIT :)
