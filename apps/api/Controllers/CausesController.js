const { BaseController } = require("./BaseController");

class CausesController extends BaseController {
  async get(request, response) {
    return response.send({ causes: [] });
  }
}

const causesController = new CausesController();
module.exports = causesController;
// module.exports = new CausesController();
