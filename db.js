var express = require('express');
var mysql = require('mysql');
var fs = require('fs');

function getConfig(){
  var obj;
  var content = fs.readFileSync("config/default.json");
  obj = JSON.parse(content);
  return obj;
}

var connection = mysql.createConnection(
  getConfig().MysqlSIT
);

connection.connect(function(error){
  if(error){
    console.log(error);
  } else {
    console.log("Connected");
  }
});

function put_record(event_id){
  connection.query("INSERT INTO `history` (`event_id`) VALUES ('"+event_id+"')", function(error, rows, fields){
    if(error){
      console.log(error);
    } else {
      console.log("success");
    }
  });
}

exports.put_record = put_record;