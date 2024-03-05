const Express=require("express")
require('dotenv').config()
const app=Express();
const port=4000;
app.get("/",(req,res)=>{
    res.send("hello world")
}
)
app.get("/twitter",(req,res)=>{
    res.send("google.com");
})






app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${port}`);
})