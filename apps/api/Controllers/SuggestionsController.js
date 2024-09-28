const { BaseController } = require("./BaseController");

class SuggestionsController extends BaseController {
  async get(request, response) {
    return response.send({ id: request.params.id });
  }
}

const suggestionsController = new SuggestionsController();
module.exports = suggestionsController;
