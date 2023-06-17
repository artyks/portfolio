import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import Header from './app/header';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Header,
  errorBoundary() {
    return <></>;
  },
  renderType: 'createRoot',
});

export const { bootstrap, mount, unmount } = lifecycles;
