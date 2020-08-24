const express = require('express');
const app = express();
const port = 8900;
const mongo = require('mongodb');
const MongoClint = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
let db;
let coll_name = "project"  //This contain data of restaurantdata.

//Sample output
app.get('/',(req,res) =>{
    res.status(200).send("This is homepage")
})
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

//All Restaurants available in db
app.get('/allrestaurants',(req,res) => {
    db.collection(coll_name).find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//***********Filtering restaurant data on the basis of city name************** */
app.get('/Delhi',(req,res) => {
    db.collection(coll_name).find({"city name":"Delhi"}).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

MongoClint.connect(mongourl,(err,client) => {
    if(err) console.log(err);
    db = client.db('project')    //collection name and db name is same.
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})


