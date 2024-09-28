const { BaseController } = require("./BaseController");
const profileMock = require("../Models/Mocks/ProfileMock.json");

class ProfileController extends BaseController {
  async get(request, response) {
    return response.send(profileMock);
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
