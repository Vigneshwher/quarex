const bodyParser = require('body-parser');
var express= require('express');
var mongoose =require('mongoose');
const app =express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
mongoose.connect('mongodb://localhost:27017/quarex',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', ()=> console.log("Error is connecting to the db"));
db.once('open', ()=> console.log("Connection to the db suffully"));

app.post("/signup", (req,res) =>{
    var Name = req.body.name;
    var Phone = req.body.phone;
    var Text = req.body.text;
    var Email = req.body.email;
    var File  = req.body.File;
    var data ={
        "Fullname": Name,
        "Mobile": Phone,
        "Message": Text,
        "Email-id": Email,
        "file" : File,
    };

    db.collection('interior').insertOne(data, (err, collection) =>{
        if(err){
            console.error("Error inserting record:", err);
            return res.status(500).send("Error inserting record");
        }
        console.log("Record Inserted Succesfully:", collection.insertedID);
        return res.redirect('success.html');
    });
});

app.get("/", (req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": "*"
    });
    return res.redirect('index.html');
});

app.listen(4445, ()=>{
    console.log("Listening on PORT 4445")
});
