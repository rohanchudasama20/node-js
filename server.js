const express=require("express");
const app=express();
const authroutes=require('./route');
const port=8000;

app.use(express.json());
app.use('/api',authroutes);

app.listen(port,()=>{
    console.log(`server is running  on port ${port}`)
});

