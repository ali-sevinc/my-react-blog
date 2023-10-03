import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { emailRegex } from "@/helpers/functions";
import { MessageType } from "@/helpers/types";

const mongoUrl = process.env.MONGO!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; data?: object }>
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !name ||
      !message ||
      !emailRegex.test(email) ||
      name.trim().length === 0 ||
      message.trim().length < 5
    ) {
      res
        .status(422)
        .json({ message: "Invalid inputs... Pleace enter valid values." });
      return;
    }

    const newMessage: MessageType = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(mongoUrl);
    } catch (error) {
      res.status(500).json({ message: "Connection failed..." });
      return;
    }

    const db = client.db("my-blog");
    try {
      const result = db.collection("messages").insertOne(newMessage);
      newMessage.id = (await result).insertedId.toJSON();
    } catch (error) {
      res.status(500).json({ message: "Insertining data failed..." });
      return;
    } finally {
      client.close();
    }

    res.status(201).json({
      message: "Your message is successfully sended..",
      data: newMessage,
    });
  } else {
    res.status(405).json({ message: "Unsupported Method..." });
  }
}
