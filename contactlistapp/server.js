var express = require('express') //adding express framework 
var app = express() //creating app using express
var mongojs = require('mongojs') //adding mongojs (a nodejs module for mongodb)
var db = mongojs('contactlist', ['contactlist']);


app.use(express.json()) //used to parse response body to json 
app.use(express.static(__dirname + '/public')); //creating a folder for saving static files

app.get('/contactlist', function(req, res){
    console.log("received req from controller")
    
    db.contactlist.find(function(err, docs){
        console.log(docs)
        res.json(docs)
    })
})

app.post('/contactlist', function(req, res){
    console.log(req.body instanceof Object)
    db.contactlist.insert(req.body, function(err,docs){
        res.json(docs)
    })
})

app.delete('/contactlist/:id', function(req,res){
    var id = req.params.id;
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
        res.json(doc);
    })
})

app.get('/contactlist/:id', function(req, res){
    var id = req.params.id;
    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    })
})
app.put('/contactlist/:id', function(req, res){
    var id = req.params.id;
    db.contactlist.findAndModify({query:{_id: mongojs.ObjectId(id)},
    update:{$set:{name:req.body.name, email: req.body.email, number: req.body.number}},
    new:true}, function(err,doc){
        res.json(doc)
    
    })
});

app.listen(9000, function(){
    console.log("Servre running @9000")
})