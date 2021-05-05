import nextConnect from "next-connect";
import database from "./../middlewares/database";
import { ObjectId } from "mongodb";

const handler = nextConnect();

handler.use(database);

handler.post(async (req: any, res: any) => {
  try {
    const input = req.body;

    const message = await req.db.collection("messages").insertOne(input);

    const insertedMessage = await req.db
      .collection("messages")
      // @ts-ignore
      .findOne({ _id: ObjectId(message.insertedId) });

    res.status(201).json({
      message: "Message created!",
      inventoryItem: insertedMessage,
    });
  } catch (err) {
    return res.status(400).json({
      message: "There was a problem creating the message",
    });
  }
});

export default handler;
