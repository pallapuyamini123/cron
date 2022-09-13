const cron = require('node-cron');
//schedule the task every 5 seconds
var MongoClient=require('mongodb').MongoClient;

cron.schedule('5 * * * *', function() {
    
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url,async function(err,db){
       if(err)
       throw err
       let db1=db.db("mydb")
      
        myobj={
            
    "name" : "abcd",
    "age" :30,
    "sec" : [
        "A"
        ],
    "id" : 100

        };
       // await db1.collection("dummy").insertOne(myobj);
        console.log("inserted");

       });

 });


