var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'127.0.0.1',
  user: 'root',
  password: 'milena666',
  database: 'wife_notes',
  port: 2222
});

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