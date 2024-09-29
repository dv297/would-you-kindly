const { ObjectId } = require("mongodb");
const { getCollection } = require("../mongo/MongoClient");
const { BaseController } = require("./BaseController");

class CausesController extends BaseController {
  async get(request, response) {
    const collection = getCollection();

    const result = await collection.find({}).toArray();

    return response.send({ data: result });
  }

  async getById(req, res) {
    const collection = getCollection();
    const objectId = new ObjectId(req.params.id);
    try {
      const entry = await collection.findOne(objectId);

      return res.send({ data: entry });
    } catch (err) {
      console.log(err);
      return res.status(500).send();
    }
  }

  async put(request, response) {
    return response.send("Cause updated succesfully (stubbed)");
  }

  async post(request, response) {
    const collection = getCollection();
    const result = await collection.insertOne(request.body);
    console.log(result);
    return response
      .status(200)
      .json({ status: "Success", id: result.insertedId.toString() });
  }

  async delete(request, response) {
    const { id } = request.params;
    console.log(id);
    return response.send("Cause Delted succesfully (stubbed)");
  }
}

const causesController = new CausesController();
module.exports = causesController;
