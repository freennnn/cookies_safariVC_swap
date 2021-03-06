var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var app = express()

//app.set('port', (process.env.PORT || 5000))

var server = app.listen(3000, function() {
  console.log("Listening on port %s...", server.address().port);
});

//app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

var routes = require("./routes/routes.js")(app);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
