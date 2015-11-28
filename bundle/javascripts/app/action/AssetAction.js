var alt = require("../alt.js");
var AssetsFetcher = require("../util/AssetsFetcher.js");

class AssetAction {
  fetchAssets() {
    this.dispatch();

    AssetsFetcher.fetch()
      .then((assets) => {
        this.actions.updateAssets(assets);
      })
      .catch((errorMessage) => {
        this.actions.assetsFailed(errorMessage);
      });
  }

  assetsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  updateAssets(assets) {
    this.dispatch(assets);
  }
}

export default alt.createActions(AssetAction);
