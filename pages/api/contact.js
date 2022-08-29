import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(402).json({ message: 'Invalid input!' });
    }


    const newMessage = {
      email,
      name,
      message
    }
    let client;

    try {
      client = await MongoClient.connect('mongodb://localhost:27017');
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
    }

    const db = client.db(process.env.mongodb_database);



    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage })
  }
}
export default handler;