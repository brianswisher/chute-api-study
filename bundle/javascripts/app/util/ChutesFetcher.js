import request from "superagent";

var ChutesFetcher = {
  fetch: function () {
    return new Promise(function (resolve) {
      request
        .get("/api/chutes")
        .end(function(error, response) {
          resolve(response.body.data.end_points.albums);
        });
    });
  }
};

module.exports = ChutesFetcher;
