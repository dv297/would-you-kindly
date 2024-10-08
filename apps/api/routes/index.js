const express = require("express");
const { v4: uuid } = require("uuid");
const generateSummary = require("../ai/generateSummary");
const { getCollection } = require("../mongo/MongoClient");
const profileController = require("../Controllers/ProfileController");
const causesController = require("../Controllers/CausesController");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({ message: "Health Check Success" });
});

router.post("/seed", async (req, res) => {
  const collection = getCollection();
  /* eslint-disable global-require */
  const mockCause1 = require("../Models/Mocks/Causes/CauseMock1.json");
  const mockCause2 = require("../Models/Mocks/Causes/CauseMock2.json");
  const mockCause3 = require("../Models/Mocks/Causes/CauseMock3.json");

  try {
    await collection.insertMany([
      mockCause1,
      mockCause2,
      mockCause3,
      mockCause1,
      mockCause1,
    ]);
    return res.status(200).json({ message: "Success" });
  } catch (err) {
    console.log(err);
    return res.status(200).json({ status: "Success (Probably)" });
  }
});

// Cause
router.get("/causes", causesController.get);
router.post("/causes", causesController.post);
router.get("/causes/:id", causesController.getById);
router.put("/causes", causesController.put);
router.delete("/causes/:id", causesController.delete);

// Profile
router.get("/profile/:id", profileController.get);

router.post("/profile", profileController.post);

router.put("/profile", profileController.put);

router.delete("/profile", profileController.delete);

router.get("/ai/suggestion/:id", async (req, res) => {
  const result = await generateSummary(req.params.id);
  res.json({
    data: {
      summary: result,
    },
  });
});

module.exports = router;
