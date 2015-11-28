import {CONSTANTS} from "../../bundle/javascripts/app/config/index";
import AlbumFetcher from "../../bundle/javascripts/app/util/AlbumFetcher";
import ChuteFetcher from "../../bundle/javascripts/app/util/ChuteFetcher";
import Enumerable from "linq";
import KeyFetcher from "../../bundle/javascripts/app/util/KeyFetcher";
import request from "superagent";

const ALBUM_DETAILS = "Album Details";
const CHUTE = "chute";

let {API, ROUTE} = CONSTANTS;

function albumDetailsEndPoint(chutes){
  return Enumerable
    .from(chutes)
    .where(function(item){ return item.title == ALBUM_DETAILS; })
    .select("$.href")
    .toArray()
    .pop();
}

export default function(router, db) {
  router.get(ROUTE.ALBUM, function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    ChuteFetcher.fetch(API.CHUTE)
      .then((chutes) => {
        AlbumFetcher.fetch(
          albumDetailsEndPoint(chutes)
            .replace(":id", KeyFetcher.fetch("chute", db.keys.find()))
        )
          .then((albums) => {
            res.json(albums);
          });
      });
  });

  router.get(ROUTE.ALBUM_ID, function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    ChuteFetcher.fetch(API.CHUTE)
      .then((chutes) => {
        AlbumFetcher.fetch(
          albumDetailsEndPoint(chutes)
            .replace(":id", req.params.id)
        )
          .then((albums) => {
            res.json(albums);
          });
      });
  });

  router.get(ROUTE.CHUTE, function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    ChuteFetcher.fetch(API.CHUTE)
      .then((chutes) => {
        res.json(chutes);
      });
  });

  router.get(ROUTE.KEY, function(req, res) {
    res.send(KeyFetcher.fetch("chute", db.keys.find()));
  });

  router.get(ROUTE.KEYS, function(req, res) {
    res.json(db.keys.find());
  });
};
