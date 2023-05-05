const express = require('express');
const { MongoClient } = require('mongodb');
const db = require('./config/connection');
const routes = require('./routes/api');
const models = require('./models');


const dbName = 'SocialDB';
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
const connectionStringURI = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(connectionStringURI);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
  });
});
