const { BaseController } = require("./BaseController");
const johnsonsCause = require("../Models/Mocks/Causes/CauseMockJohnsons.json");
const williamsCause = require("../Models/Mocks/Causes/CauseMockWilliams.json");

class CausesController extends BaseController {
  async get(request, response) {
    return response.send({ data: [johnsonsCause, williamsCause] });
  }
}

const causesController = new CausesController();
module.exports = causesController;
// module.exports = new CausesController();
