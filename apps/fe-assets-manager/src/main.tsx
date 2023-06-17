import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './app/app';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary() {
    return <></>;
  },
  renderType: 'createRoot',
});

export const { bootstrap, mount, unmount } = lifecycles;
