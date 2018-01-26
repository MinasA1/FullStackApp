const express = require('express');
let routes = require('./routes/routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


let { User } = require('./models');

app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api/v1', routes);

app.listen(3000, function(){
    console.log("App running on port 3000");
});
