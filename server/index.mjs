import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import './Environment.mjs';
import products from './routes/products.mjs'
import orders from './routes/orders.mjs'

const port = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', products);
app.use('/orders', orders);

app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occured.")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});