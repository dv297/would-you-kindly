const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const logger = require("morgan");

const generateSummary = require("./ai/generateSummary");
const indexRouter = require("./routes/index");

const port = 3000;
const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.get("/ai", () => {
  generateSummary();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
