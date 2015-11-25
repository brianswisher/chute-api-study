import request from "superagent";
import {CONSTANTS} from "../config/index";
let {ROUTE} = CONSTANTS;

var ChuteFetcher = {
  fetch: function () {
    return new Promise(function (resolve) {      
      request
        .get(ROUTE.CHUTE)
        .end(function(error, response) {
          resolve(response.body.data.end_points.albums);
        });
    });
  }
};

module.exports = ChuteFetcher;
