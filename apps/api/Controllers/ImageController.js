const pinataClient = require("../Data/PinataClient");
const { BaseController } = require("./BaseController");

class ImageController extends BaseController {
  post(req, res) {
    const { file } = req.file;
    const fileName = req.cause_id || "no fileName";
    pinataClient.upload(file, fileName);
    res.send({ message: "Succesfully uploaded" });
  }
}

const imageController = new ImageController();
module.exports = imageController;
