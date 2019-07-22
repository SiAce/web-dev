const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const expressSanitizer = require('express-sanitizer');
const express = require('express');

const app = express();

// App config
mongoose.connect('mongodb://localhost/restful_blog_app', { useNewUrlParser: true });
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(methodOverride('_method'));

// Mongoose model config
const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now },
});
const Blog = mongoose.model('Blog', blogSchema);

// RESTful routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// Index route
app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { blogs });
    }
  });
});

// New route
app.get('/blogs/new', (req, res) => {
  res.render('new');
});

// Create route
app.post('/blogs', (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, (err) => {
    if (err) {
      res.render('new');
    } else {
      res.redirect('/blogs');
    }
  });
});

// Show route
app.get('/blogs/:id', (req, res) => {
  Blog.findById(req.params.id, (err, blog) => {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.render('show', { blog });
    }
  });
});

// Edit route
app.get('/blogs/:id/edit', (req, res) => {
  Blog.findById(req.params.id, (err, blog) => {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.render('edit', { blog });
    }
  });
});

// Update route
app.put('/blogs/:id', (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err) => {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.redirect(`/blogs/${req.params.id}`);
    }
  });
});

// Delete route
app.delete('/blogs/:id', (req, res) => {
  Blog.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.redirect(`/blogs/${req.params.id}`);
    } else {
      res.redirect('/blogs');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on PORT 3000!');
});
