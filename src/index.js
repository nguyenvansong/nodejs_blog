const path = require('path');
const morgan = require('morgan');
const express = require('express');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3001;

const route = require('./routes');

const db = require('./config/db');

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public'))); //sử dụng thư mục public

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

app.use(methodOverride('_method')); //sử dụng thư viện method-override để gửi đi phương thức PUT cho form( override lại phương thức của form)

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Rouse init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
