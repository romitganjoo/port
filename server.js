const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://127.0.0.1:27017/test",{useNewUrlParser: true},{useUnifiedTopology: true} );
//create a data schema
const notesSchema = {
      Name: String,
      Email: String,
      Message: String
}

const Note = mongoose.model("Note", notesSchema);

var db = mongoose.connection;
db.on('error',()=> console.log("Error in connecting to databse"));
db.once('open',()=>console.log("Connected to database"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
      })

app.post("/", function(req, res){
      let newNote = new Note({
        Name: req.body.name,
        Email: req.body.email,
        Message: req.body.message
      });
      new Note.save();
      res.redirect("/");

})
app.listen(5500, function(){
    console.log("server is running on 5500");

})