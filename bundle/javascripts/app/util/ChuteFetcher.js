import request from "superagent";
import {CONSTANTS} from "../config/index";
let {ROUTE} = CONSTANTS;

var ChuteFetcher = {
  fetch: function (endpoint) {
    return new Promise(function (resolve) {
      request
        .get(endpoint || ROUTE.CHUTE)
        .end(function(error, response) {
          if (endpoint) {
            resolve(response.body.data.end_points.albums);
          } else {
            resolve(response.body);
          }
        });
    });
  }
};

module.exports = ChuteFetcher;
