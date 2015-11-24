import {CONSTANTS} from "../../bundle/javascripts/app/config/index";
import request from "superagent";

let {API, ROUTE} = CONSTANTS;

export default function(router, db) {
  router.get(ROUTE.CHUTES, function(req, res) {
    request
      .get(API.CHUTES)
      .end(function(error, response) {;
        res.json(response.body);
      });
  });

  router.get(ROUTE.KEYS, function(req, res) {
    res.json(db.keys.find());
  });
};
