const mongooose=require('mongoose')





const connectMongoDb=(url)=>{
    mongooose.connect(url).then(()=>{
        console.log("connected sucessfully to databae");
    }).catch(()=>{
        console.log("unable to connect the database");
    })


}

module.exports=connectMongoDb