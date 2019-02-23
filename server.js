const express = require('express');
var http = require("http");
var url = require("url");

const app = express();
const path = require('path');
const router = express.Router();
var db = require("./db");

//app.(express.static('./'));
router.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
 });

 router.get('/css/style.css',function(req, res){
  res.sendFile(path.join(__dirname+'/css/style.css'));
 });


/*
router.get('/about',function(req, res){
  res.sendFile(path.join(__dirname+'/page2.html'));
});
*/


router.get('/static', function(req, res) {
  var urlParsed =  url.parse(req.url, true);
  console.log(urlParsed.query.event);
  db.put_record(urlParsed.query.event);
  res.redirect('/');
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');