import request from "superagent";
import {CONSTANTS} from "../config/index";

let {ROUTE} = CONSTANTS;

var ChuteFetcher = {
  fetch: function (endpoint) {
    return new Promise(function (resolve) {
      request
        .get(endpoint || ROUTE.CHUTE)
        .end(function(error, response) {
          if (response) {
            let payload = response.body;

            if (endpoint) {
              resolve(payload.data.end_points.albums);
            } else {
              resolve(payload);
            }
          }
        });
    });
  }
};

module.exports = ChuteFetcher;
