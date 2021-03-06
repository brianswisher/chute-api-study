import request from "superagent";
import {CONSTANTS} from "../config/index";

let {ROUTE} = CONSTANTS;

var AlbumFetcher = {
  fetch: function (endpoint) {
    return new Promise(function (resolve) {
      request
        .get(endpoint || ROUTE.ALBUM)
        .end(function(error, response) {
          if (response) {
            let payload = response.body;

            if (endpoint) {
              resolve([payload.data.links]);
            } else {
              resolve(payload);
            }
          }
        });
    });
  }
};

module.exports = AlbumFetcher;
