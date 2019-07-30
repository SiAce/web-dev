const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://siacespark:wzbqq05Atlas@cluster0-gilx8.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.log('Error:', err.message);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(process.env.PORT || 3000, process.env.IP, () => {
  console.log('Server is running');
});
