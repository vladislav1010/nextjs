import nextConnect from "next-connect";
import { db, client } from "../../../database";

async function database(req, res, next) {
  req.dbClient = client;
  req.db = await db();
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
