const express=require("express");
const app=express();
const port=process.env.PORT || 4040;

app.use("/",express.static(__dirname+"/public"));

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
});