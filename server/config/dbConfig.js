const mongoose = require('mongoose');

console.log("MONGO_URL:", process.env.MONGO_URL); // Add this console log

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Mongo DB Connection Successful');
}).catch((error) => {
  console.log('Mongo DB Connection Failed:', error);
});

const connection = mongoose.connection;

module.exports = connection;
