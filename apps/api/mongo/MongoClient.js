const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

const getCollection = () => {
  const db = client.db(process.env.MONGODB_DATABASE_NAME);
  const collection = db.collection(process.env.MONGODB_COLLECTION_NAME);

  return collection;
};

module.exports = { MongoClient: client, getCollection };
