const express=require('express');
const app=express();
const port=3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.post('/api/data',(req,res)=>{
    const data=req.body;
    res.json({
        message:'data is received!',
        yourdata:data
    });
});

app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`)
})