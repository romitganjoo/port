const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb+srv://romitg1998:Jk02ab@7995@cluster0.ltixng3.mongodb.net/clientDB");
//create a data schema
const notesSchema = {
      Name: String,
      Email: String,
      Message: String
}

const Note = mongoose.model("Note", notesSchema);
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
      })

app.post("/", function(req, res){
      let newNote = new Note({
        Name: req.body.name,
        Email: req.body.email,
        Message: req.body.message
      });
      newNote.save();
      res.redirect('/');

})
app.listen(5500, function(){
    console.log("server is running on 5500");

})