import React from "react";

let {createFactory, renderToString} = React;
let isServer = typeof window === "undefined";
let Route;
let routeFactory = {
  factory: createFactory,
  render: renderToString
};
let viewport = isServer ? null : document.getElementById("viewport");

export default (path, props = {}) => {
  let {ROUTE} = require("./config/index").CONSTANTS;

  switch (path) {
    case ROUTE.ROOT:
      if (isServer) {
        routeFactory.module = "HomeScreen";

        return routeFactory;
      } else {
        return require.ensure([], function() {
          Route = require("./HomeScreen");

          React.render(<Route {...props} />, viewport);
        }, "home");
      }
      break;

    case ROUTE.ALBUM_SCREEN:
      if (isServer) {
        routeFactory.module = "AlbumScreen";

        return routeFactory;
      } else {
        return require.ensure([], function() {
          Route = require("./AlbumScreen");

          React.render(<Route {...props} />, viewport);
        }, "album");
      }
      break;

    case ROUTE.ASSETS_SCREEN:
      if (isServer) {
        routeFactory.module = "AssetsScreen";

        return routeFactory;
      } else {
        return require.ensure([], function() {
          Route = require("./AssetsScreen");

          React.render(<Route {...props} />, viewport);
        }, "assets");
      }
      break;

    default:
      if (isServer) {
        routeFactory.module = "NotFoundScreen";

        return routeFactory;
      } else {
        return require.ensure([], function() {
          Route = require("./NotFoundScreen");

          React.render(<Route {...props} />, viewport);
        }, "not_found");
      }
  }
};
