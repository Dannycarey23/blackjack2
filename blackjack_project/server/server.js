const express = require ('express');
const app = express();
const cors = require ('cors');
const MongoClient = require ('mongodb').MongoClient;
const createRouter = require ('./helpers/create_router.js');

app.use(cors);
app.use(express.json());

MongoClient.connect('mongodb://127.0.1:27017', { useUnifiedTopology: true })
.then((client) => {
    const db = client.db ('user_stats');
})

