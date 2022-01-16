const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Alice:PasswordMongo1!@cluster0.mp04l.mongodb.net/mernshopping?retryWrites=true&w=majority' || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
