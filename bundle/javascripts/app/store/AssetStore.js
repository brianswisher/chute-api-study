var alt = require("../alt.js");
var AssetAction = require("../action/AssetAction");

class AssetStore {
  constructor() {
    this.assets = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateAssets: AssetAction.UPDATE_ASSETS,
      handleFetchAssets: AssetAction.FETCH_ASSETS,
      handleAssetsFailed: AssetAction.ASSETS_FAILED
    });
  }

  handleUpdateAssets(assets) {
    this.assets = assets;
    this.errorMessage = null;
  }

  handleFetchAssets() {
    this.assets = [];
  }

  handleAssetsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

module.exports = alt.createStore(AssetStore, "AssetStore");
