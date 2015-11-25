var alt = require("../alt.js");
var AlbumAction = require("../action/AlbumAction");

class AlbumStore {
  constructor() {
    this.albums = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateAlbums: AlbumAction.UPDATE_ALBUMS,
      handleFetchAlbums: AlbumAction.FETCH_ALBUMS,
      handleAlbumsFailed: AlbumAction.ALBUMS_FAILED
    });
  }

  handleUpdateAlbums(albums) {
    this.albums = albums;
    this.errorMessage = null;
  }

  handleFetchAlbums() {
    this.albums = [];
  }

  handleAlbumsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

module.exports = alt.createStore(AlbumStore, "AlbumStore");
