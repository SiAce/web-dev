const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const friends = ['Geralt', 'Ciri', 'Yennefer', 'Triss'];

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/friends', (req, res) => {
  res.render('friends', { friends });
});

app.post('/addfriend', (req, res) => {
  const newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect('/friends');
});

app.listen(3000, () => {
  console.log('server started at port 3000');
});
