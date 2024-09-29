require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const logger = require("morgan");

const { MongoClient } = require("./mongo/MongoClient");
const indexRouter = require("./routes/index");

const port = 3000;
const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

async function main() {
  if (
    !process.env.MONGODB_URL ||
    !process.env.MONGODB_DATABASE_NAME ||
    !process.env.MONGODB_COLLECTION_NAME
  ) {
    throw new Error(
      "MongoDB environment variables are missing. Ensure a .env is defined",
    );
  }

  await MongoClient.connect();

  console.log("MongoDB Connected");

  app.listen(port, () => {
    console.log(`API listening on port ${port}`);
  });
}

main();
