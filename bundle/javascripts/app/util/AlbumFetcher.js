import Enumerable from "linq";
import request from "superagent";
import KeyFetcher from "../util/KeyFetcher.js";
import {CONSTANTS} from "../config/index";

let {CHUTE, ROUTE} = CONSTANTS;

var AlbumFetcher = {
  fetch: function (endpoint) {
    return new Promise(function (resolve) {
      request
        .get(endpoint || ROUTE.ALBUM)
        .end(function(error, response) {
          if (endpoint) {
            resolve([response.body.data.links]);
          } else {
            resolve(response.body);
          }
        });
    });
  }
};

module.exports = AlbumFetcher;
