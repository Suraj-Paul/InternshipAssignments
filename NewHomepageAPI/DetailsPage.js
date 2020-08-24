const express = require('express');
const app = express();
const port = 8900;
const mongo = require('mongodb');
const MongoClint = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
let db;
let coll_name = "sampleDetails";

app.get('/',(req,res) => {
    res.status(200).send('This is homepage')
})
//fetching details
app.get('/details',(req,res) => {
    db.collection(coll_name).find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//Database connectivity
MongoClint.connect(mongourl,(err,client) => {
    if(err) console.log(err);
    db = client.db('project')
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port no. ${port}`)
    })
})
