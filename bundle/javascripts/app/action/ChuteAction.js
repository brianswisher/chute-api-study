var alt = require("../alt.js");
var ChutesFetcher = require("../util/ChutesFetcher.js");

class ChuteAction {
  fetchChutes() {
    this.dispatch();

    ChutesFetcher.fetch()
      .then((chutes) => {
        this.actions.updateChutes(chutes);
      })
      .catch((errorMessage) => {
        this.actions.chutesFailed(errorMessage);
      });
  }

  chutesFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  updateChutes(chutes) {
    this.dispatch(chutes);
  }
}

export default alt.createActions(ChuteAction);
