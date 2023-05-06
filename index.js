const express = require('express');
const { MongoClient } = require('mongodb');
// const db = require('./config/connection');
const routes = require('./routes/api');
// const models = require('./models');

const mongoose = require('mongoose');

// const dbName = 'SocialDB';
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes'));
// const connectionStringURI = `mongodb://127.0.0.1:27017`;
// const client = new MongoClient(connectionStringURI);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/SocialDB', { 
 // useFindAndModify: false,  said not supported look into what this does. 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
  });
// });
