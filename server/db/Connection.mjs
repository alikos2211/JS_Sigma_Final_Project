import { MongoClient } from 'mongodb';
import { productsList } from './DbInitData.mjs';

const dbName = process.env.DB_NAME;
const connectionString = process.env.DB_URL || '';
const client = new MongoClient(connectionString);

async function populateCollectionIfNotEmpty(name, data) {
	const collection = db.collection(name);

	if (await collection.countDocuments() !== 0) {
		return;
	}

	collection.insertMany(data);
}

async function populateDb() {
	populateCollectionIfNotEmpty('products', productsList);
}

let conn;
try {
	conn = await client.connect();
} catch (e) {
	console.error(e);
}

let db = conn.db(dbName);
await populateDb();

export default db;