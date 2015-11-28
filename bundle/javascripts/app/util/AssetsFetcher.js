import request from "superagent";
import {CONSTANTS} from "../config/index";

let {ROUTE} = CONSTANTS;

var AssetsFetcher = {
  fetch: function (endpoint) {
    return new Promise(function (resolve) {
      request
        .get(endpoint || ROUTE.ASSETS)
        .end(function(error, response) {
          if (response) {
            let payload = JSON.parse(response.text);

            if (endpoint) {
              resolve(payload.data);
            } else {
              resolve(payload);
            }
          }
        });
    });
  }
};

module.exports = AssetsFetcher;
