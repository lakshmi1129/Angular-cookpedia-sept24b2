const mongoose = require("mongoose")

const connectionString = process.env.CONNECTIONSTRING

mongoose.connect(connectionString).then((res)=>{
    console.log("MongoDB Atlas connection Successfull"); 
}).catch(err=>{
    console.log("Connnection Failedd");
    console.log(err);
})