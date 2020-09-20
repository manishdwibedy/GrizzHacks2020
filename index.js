var express = require("express");
var app = express();
var db = require('./db')
var bodyParser = require('body-parser');
var admin = require('firebase-admin');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const apiRouter = require('./routers/api');
const viewsRouter = require('./routers/views');

app.use('/', viewsRouter);
app.use('/api', apiRouter);


app.listen(3000, () => {
 console.log("Server running on port 3000");
});