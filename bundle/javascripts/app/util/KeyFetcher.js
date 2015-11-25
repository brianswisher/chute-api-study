import Enumerable from "linq";
import request from "superagent";
import {CONSTANTS} from "../config/index";

let {ROUTE} = CONSTANTS;

var KeyFetcher = {
  fetch: function (name) {
    if (typeof window === "undefined") {
      return false;
    } else {
      return (Enumerable
        .from(APP.data.keys)
        .where(function(item){ return item.name == name; })
        .select("$.value")
        .toArray()
        .pop()
      );
    }
  }
};

module.exports = KeyFetcher;
