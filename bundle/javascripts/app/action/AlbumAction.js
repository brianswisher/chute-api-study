var alt = require("../alt.js");
var AlbumFetcher = require("../util/AlbumFetcher.js");

class AlbumAction {
  fetchAlbums() {
    this.dispatch();

    AlbumFetcher.fetch()
      .then((albums) => {
        this.actions.updateAlbums(albums);
      })
      .catch((errorMessage) => {
        this.actions.albumsFailed(errorMessage);
      });
  }

  albumsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  updateAlbums(albums) {
    this.dispatch(albums);
  }
}

export default alt.createActions(AlbumAction);
