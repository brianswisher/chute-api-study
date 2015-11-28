import Enumerable from "linq";
import request from "superagent";
import KeyFetcher from "../util/KeyFetcher.js";
import {CONSTANTS} from "../config/index";

let {CHUTE, ROUTE} = CONSTANTS;

var AlbumFetcher = {
  fetch: function (key) {
    return new Promise(function (resolve) {
      request
        .get(ROUTE.ALBUM.replace(":id", KeyFetcher.fetch()))
        .end(function(error, response) {
          resolve([response.body.data.links]);
        });
    });
  }
};

module.exports = AlbumFetcher;
