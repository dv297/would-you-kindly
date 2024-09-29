const express = require("express");
const { v4: uuid } = require("uuid");
const { getCollection } = require("../mongo/MongoClient");
const suggestionsController = require("../Controllers/SuggestionsController");
const profileController = require("../Controllers/ProfileController");
const causesController = require("../Controllers/CausesController");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({ message: "Health Check Success" });
});

router.post("/seed", async (req, res) => {
  const collection = getCollection();
  // eslint-disable-next-line global-require
  const mockCause1 = require("../Models/Mocks/Causes/CauseMock1.json");
  // eslint-disable-next-line global-require
  const mockCause2 = require("../Models/Mocks/Causes/CauseMock2.json");

  await collection.insertMany([
    mockCause1,
    mockCause2,
    mockCause1,
    mockCause1,
    mockCause1,
  ]);
  return res.status(200).json({ message: "Success" });
});

// Cause
router.get("/causes", causesController.get);
router.post("/causes", causesController.post);
router.get("/causes/:id", causesController.getById);
router.put("/causes", causesController.put);
router.delete("/causes/:id", causesController.delete);

router.get("/cause/:id/suggestions", suggestionsController.get);

// Profile
router.get("/profile/:id", profileController.get);

router.post("/profile", profileController.post);

router.put("/profile", profileController.put);

router.delete("/profile", profileController.delete);

module.exports = router;
