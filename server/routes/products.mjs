import express from 'express';
import db from '../db/Connection.mjs';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
    const collection = await db.collection('products');
    const results = await collection.find({})
        .toArray();

    res.send(results).status(200);
});

export default router;