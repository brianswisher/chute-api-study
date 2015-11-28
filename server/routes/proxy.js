import {CONSTANTS} from "../../bundle/javascripts/app/config/index";
import Enumerable from "linq";
import KeyFetcher from "../../bundle/javascripts/app/util/KeyFetcher";
import request from "superagent";

const ALBUM_DETAILS = "Album Details";
const CHUTE = "chute";

let {API, ROUTE} = CONSTANTS;

export default function(router, db) {
  router.get(ROUTE.ALBUM, function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    request
      .get(API.CHUTE)
      .end(function(error, response) {;
        request
          .get(Enumerable
            .from(response.body.data.end_points.albums)
            .where(function(item){ return item.title == ALBUM_DETAILS; })
            .select("$.href")
            .toArray()
            .pop()
            .replace(":id", req.params.id)
          )
          .end(function(error, response) {;
            res.json(response.body);
          });
      });
  });

  router.get(ROUTE.CHUTE, function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    request
      .get(API.CHUTE)
      .end(function(error, response) {;
        res.json(response.body);
      });
  });

  router.get(ROUTE.KEY, function(req, res) {
    res.json(KeyFetcher.fetch("chute", db.keys.find()));
  });

  router.get(ROUTE.KEYS, function(req, res) {
    res.json(db.keys.find());
  });
};
