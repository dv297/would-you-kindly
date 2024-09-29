const express = require("express");
const { v4: uuid } = require("uuid");
<<<<<<< HEAD
const { getCollection } = require("../mongo/MongoClient");
=======
const multer = require("multer");
>>>>>>> 5450248 (pinata integration)
const suggestionsController = require("../Controllers/SuggestionsController");
const profileController = require("../Controllers/ProfileController");
const causesController = require("../Controllers/CausesController");
const imageController = require("../Controllers/ImageController");

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
  /* eslint-enable global-require */

  try {
    await collection.insertMany([
      mockCause1,
      mockCause2,
      mockCause1,
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

router.get("/cause/:id/suggestions", suggestionsController.get);

// Profile
router.get("/profile/:id", profileController.get);

router.post("/profile", profileController.post);

router.put("/profile", profileController.put);

router.delete("/profile", profileController.delete);

// Image
const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/image", upload.single("file"), imageController.post);

module.exports = router;
