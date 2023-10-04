const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
let usersRouter = null

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('blackjack_users');
    const usersCollection = db.collection('users');
    usersRouter = createRouter(usersCollection);


    app.post('/api/users', (req, res) => {
      const newData = req.body;

        usersCollection
          .insertOne(newData)
          .then((result) => {
            res.json(result.ops[0]);
          })
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });

    });

    app.use('/api/users', usersRouter);
  })
  .catch(console.error);

app.listen(9000, function() {
  console.log(`Hotel server running on port ${this.address().port}`);
});
