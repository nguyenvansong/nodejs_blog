const path = require('path');
const morgan = require('morgan');
const express = require('express');
const { engine  } = require ('express-handlebars');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname,'public')));//sử dụng thư mục public
//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})