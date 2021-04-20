import nextConnect from "next-connect";
import database from "./../middlewares/database";
import { ObjectId } from "mongodb";

const handler = nextConnect();

handler.use(database);

handler.post(async (req: any, res: any) => {
  try {
    const input = Object.assign({}, req.body, {
      image:
        "https://images.unsplash.com/photo-1580169980114-ccd0babfa840?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    });

    const product = await req.db.collection("products").insertOne(input);

    const insertedProduct = await req.db
      .collection("products")
      // @ts-ignore
      .findOne({ _id: ObjectId(product.insertedId) });

    res.status(201).json({
      message: "Product created!",
      inventoryItem: insertedProduct,
    });
  } catch (err) {
    return res.status(400).json({
      message: "There was a problem creating the product",
    });
  }
});

export default handler;
