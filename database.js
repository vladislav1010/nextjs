import { MongoClient } from "mongodb";
import assert from "assert";

const client = new MongoClient(process.env.ATLAS_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function db() {
  if (!client.isConnected()) await client.connect();

  return client.db("myFirstDatabase");
}

export { db, client };
