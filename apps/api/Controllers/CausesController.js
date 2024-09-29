const { BaseController } = require("./BaseController");
const CauseMocks = require("../Models/Mocks/Causes/index");

class CausesController extends BaseController {
  async get(request, response) {
    const causes = Object.values(CauseMocks);
    return response.send({ data: causes });
  }
}

const causesController = new CausesController();
module.exports = causesController;
