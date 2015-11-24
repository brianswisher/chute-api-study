var alt = require("../alt.js");
var ChuteAction = require("../action/ChuteAction");

class ChuteStore {
  constructor() {
    this.chutes = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateChutes: ChuteAction.UPDATE_CHUTES,
      handleFetchChutes: ChuteAction.FETCH_CHUTES,
      handleChutesFailed: ChuteAction.CHUTES_FAILED
    });
  }

  handleUpdateChutes(chutes) {
    this.chutes = chutes;
    this.errorMessage = null;
  }

  handleFetchChutes() {
    this.chutes = [];
  }

  handleChutesFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

module.exports = alt.createStore(ChuteStore, "ChuteStore");
