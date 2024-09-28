const { BaseController } = require("./BaseController");

class ProfileController extends BaseController {
  async get(request, response) {
    return response.send({});
  }

  async put(request, response) {
    return response.send({ message: "Profile updated succesfully (stubbed)" });
  }

  async post(request, response) {
    return response.send({ message: "Profile Created (stubbed)" });
  }

  async delete(request, response) {
    return response.send({});
  }
}

const profileController = new ProfileController();
module.exports = profileController;
