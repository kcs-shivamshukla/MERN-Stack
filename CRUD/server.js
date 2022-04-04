require('./models/db');

const express = require('express');
const path = require('path');
// const { engine } = require('express-handlebars');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const empController = require('./controllers/empController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({extname: 'hbs', defaultLayout: 'mainlayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log("Express Server running at port: 3000");
});

app.use('/employee', empController);