const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cat_app', { useNewUrlParser: true });

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String,
});

const Cat = mongoose.model('Cat', catSchema);

// Adding a new cat to database
// const george = new Cat({
//   name: 'Bliocoma',
//   age: 7,
//   temperament: 'cantankerous',
// });

// george.save((err, cat) => {
//   if (err) {
//     console.log('Something went wrong');
//   } else {
//     console.log('Save succeed!');
//     console.log(cat);
//   }
// });

Cat.create({
  name: 'commingle',
  age: 11,
  temperament: 'coalition',
}, (err, cat) => {
  if (err) {
    console.log(`Opps, error: ${err}`);
  } else {
    console.log(cat);
  }
});

// Retrieve all cats from DB and print each one
Cat.find({}, (err, cats) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log('All the cats:');
    console.log(cats);
  }
});
