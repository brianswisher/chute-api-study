import Enumerable from "linq";
import request from "superagent";
import {CONSTANTS} from "../config/index";

let {ROUTE} = CONSTANTS;

var KeyFetcher = {
  fetch: function (name, keys) {
    if (typeof window === "undefined" && !keys) {
      return false;
    } else {
      return (Enumerable
        .from(keys || window.APP.data.keys)
        .where(function(item){ return item.name == name; })
        .select("$.value")
        .toArray()
        .pop()
      );
    }
  }
};

module.exports = KeyFetcher;
