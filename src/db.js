const mongoose = require('mongoose');
const URI = process.env.MONGO_DB_URI;

mongoose.connect (URI, {
  // userCreateIndex: true, No soportada
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once ('open', () => {
  console.log('DB Connect');
})
