var MongoClient = require('mongodb').MongoClient;

let phrase = "<your password here>";
let connStr = `mongodb+srv://${phrase}:${phrase}@cluster0-ptdbw.mongodb.net/test?retryWrites=true&w=majority;`
var url = connStr;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var doc = { name: "Benjamin Kleeman", address: "1234 W. Pleasant Blvd." };
  dbo.collection("students").insertOne(doc, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});