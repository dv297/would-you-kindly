const express = require("express");
const { v4: uuid } = require("uuid");
const suggestionsController = require("../Controllers/SuggestionsController");
const causeController = require("../Controllers/CauseController");
const profileController = require("../Controllers/ProfileController");
const causesController = require("../Controllers/CausesController");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({ message: "Health Check Success" });
});

// causes
router.get("/causes", causesController.get);

router.post("/causes", (req, res) => {
  console.log("hit", req.body);
  const data = {
    ...req.body,
    id: uuid(),
  };

  mockList.push(data);
  res.json({ status: "success" });
  causesController.get();
});

// Cause
router.get("/causes/:id", causeController.get);

router.post("/cause", causeController.post);

router.put("/cause", causeController.put);

router.delete("/cause/:id", causeController.delete);

router.get("/cause/:id/suggestions", suggestionsController.get);

// Profile
router.get("/profile/:id", profileController.get);

router.post("/profile", profileController.post);

router.put("/profile", profileController.put);

router.delete("/profile", profileController.delete);

module.exports = router;
