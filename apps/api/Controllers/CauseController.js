const { BaseController } = require("./BaseController");
const mockCause = require("../Models/Mocks/Causes/CauseMockJohnsons.json");

class CauseController extends BaseController {
  async get(request, response) {
    console.log("ddddd");
    return response.send(mockCause);
  }

  async put(request, response) {
    return response.send("Cause updated succesfully (stubbed)");
  }

  async post(request, response) {
    return response.send("Cause Created (stubbed)");
  }

  async delete(request, response) {
    const { id } = request.params;
    console.log(id);
    return response.send("Cause Delted succesfully (stubbed)");
  }
}

const causeController = new CauseController();

module.exports = causeController;
