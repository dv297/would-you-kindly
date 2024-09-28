const { BaseController } = require("./BaseController");
const suggestionMock = require("../Models/Mocks/SuggestionMock.json");

class SuggestionsController extends BaseController {
  async get(request, response) {
    return response.send({ suggestions: [suggestionMock] });
  }
}

const suggestionsController = new SuggestionsController();
module.exports = suggestionsController;
