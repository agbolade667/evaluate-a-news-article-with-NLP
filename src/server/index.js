const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
var bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors');
const app = express();
var aylienAPI = require('aylien_textapi');
var textapi = new aylienAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('dist'));
// designates what port the app will listen to for incoming requests
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port); {
  console.log('App listening on port 8080!')
};
console.log(`__dirname: ${__dirname}`)
// route.get('/favicon.ico', (_req, res) => res.sendFile(path.join(__dirname, '../src/client/views/index.html')))
app.get('/', function (req, res) {
  res.sendFile(path.resolve('./dist/index.html')) //./src/client/views/index.html'));
});
// API request sent to Aylien API
app.post('/article', function (req, res) {
  console.log('POST request received');
  console.log(req.body)
  textapi.sentiment({
    url: req.body.text,
    mode: 'document'
  }, function (error, response) {
    console.log('inside post function');
    console.log(response);
    res.send(response)
    if (error === null) {
      console.log('inside error');
      console.log(response);
    }
  })
});
module.exports = app;