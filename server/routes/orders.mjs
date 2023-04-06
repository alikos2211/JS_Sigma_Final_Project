import express from 'express';
import db from '../db/Connection.mjs';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.post('/', async (req, res) => {
    const collection = await db.collection('orders');
    const results = await collection.insertOne(req.body)
    res.send({}).status(200);
});

export default router;