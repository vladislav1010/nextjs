import nextConnect from "next-connect";
import { db, client } from "../../../database";

async function database(req: any, res: any, next: any) {
  req.dbClient = client;
  req.db = await db();
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
