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

const mockList = [
  {
    image: "https://picsum.photos/200/300",
    id: "1",
    title: "Classroom supplies for the Ms. Anthony's 3rd grade class",
    description: "Support Our 3rd Grade Classroom!",
    body: `
<p>Help our 3rd graders thrive and explore the world around them! We’re raising funds to enhance our classroom with essential supplies, engaging educational materials, and exciting hands-on learning experiences. Your generous donations will provide:</p>
<ul>
    <li><strong>Books and Reading Materials:</strong> Cultivating a love for reading with diverse and age-appropriate books.</li>
    <li><strong>Art Supplies:</strong> Fostering creativity through art projects that allow students to express themselves.</li>
    <li><strong>STEM Kits:</strong> Inspiring future innovators with science and engineering activities that spark curiosity.</li>
    <li><strong>Field Trips:</strong> Creating unforgettable learning experiences outside the classroom.</li>
</ul>
<p>Every dollar counts! Your support will directly impact our students' education and help create a vibrant learning environment. Thank you for making a difference in our classroom!</p>
`,
  },
  {
    image: "https://picsum.photos/200/300",
    id: "2",
    title: "Help the Johnson Family",
    description: "Support a Local Family in Need",
    body: `
        <p>Meet the Johnson family: a loving family facing tough times after the dad was laid off from his job. With a sudden loss of income, they are struggling to meet basic needs and keep their spirits up. We’re reaching out to our community for help to provide:</p>
<ul>
    <li><strong>Groceries:</strong> Ensuring the family has enough food to eat during this challenging time.</li>
    <li><strong>Utility Bills:</strong> Helping to keep the lights on and the heat running as they navigate this transition.</li>
    <li><strong>School Supplies:</strong> Supporting the kids as they continue their education from home.</li>
    <li><strong>Job Search Assistance:</strong> Providing resources for the dad to find new employment opportunities.</li>
</ul>
<p>Every donation, big or small, will make a meaningful impact on their lives. Let’s come together to support the Johnson family in this difficult time. Thank you for your kindness and generosity!</p>
`,
  },
  {
    image: "https://picsum.photos/200/300",
    id: "3",
    title: "Help the Johnson Family",
    description: "Support a Local Family in Need",
    body: `
        <p>Meet the Johnson family: a loving family facing tough times after the dad was laid off from his job. With a sudden loss of income, they are struggling to meet basic needs and keep their spirits up. We’re reaching out to our community for help to provide:</p>
<ul>
    <li><strong>Groceries:</strong> Ensuring the family has enough food to eat during this challenging time.</li>
    <li><strong>Utility Bills:</strong> Helping to keep the lights on and the heat running as they navigate this transition.</li>
    <li><strong>School Supplies:</strong> Supporting the kids as they continue their education from home.</li>
    <li><strong>Job Search Assistance:</strong> Providing resources for the dad to find new employment opportunities.</li>
</ul>
<p>Every donation, big or small, will make a meaningful impact on their lives. Let’s come together to support the Johnson family in this difficult time. Thank you for your kindness and generosity!</p>
`,
  },
  {
    image: "https://picsum.photos/200/300",
    id: "4",
    title: "Help the Johnson Family",
    description: "Support a Local Family in Need",
    body: `
        <p>Meet the Johnson family: a loving family facing tough times after the dad was laid off from his job. With a sudden loss of income, they are struggling to meet basic needs and keep their spirits up. We’re reaching out to our community for help to provide:</p>
<ul>
    <li><strong>Groceries:</strong> Ensuring the family has enough food to eat during this challenging time.</li>
    <li><strong>Utility Bills:</strong> Helping to keep the lights on and the heat running as they navigate this transition.</li>
    <li><strong>School Supplies:</strong> Supporting the kids as they continue their education from home.</li>
    <li><strong>Job Search Assistance:</strong> Providing resources for the dad to find new employment opportunities.</li>
</ul>
<p>Every donation, big or small, will make a meaningful impact on their lives. Let’s come together to support the Johnson family in this difficult time. Thank you for your kindness and generosity!</p>
`,
  },
];

// causes
router.get("/causes", (req, res) => {
  res.json({
    data: mockList,
  });
});

router.get("/causes/:id", (req, res) => {
  console.log(req.params.id);

  const entry = mockList.find((item) => item.id === req.params.id);

  if (!entry) {
    return res.status(404).json({ data: null, message: "Not found" });
  }

  return res.json({ data: entry });
});

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
router.get("/cause/:id", causeController.get);

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
