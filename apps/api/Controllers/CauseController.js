const { BaseController } = require("./BaseController");

class CauseController extends BaseController {
  async get(request, response) {
    return response.send({ id: request.params.id });
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
