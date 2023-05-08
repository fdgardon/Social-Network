const express = require('express');
const { MongoClient } = require('mongodb');
const routes = require('./routes/api');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/SocialDB', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

  app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
  });
