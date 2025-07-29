const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Student data");
});

app.get("/show/:id/email/:email", (req, res) => {
  const { id,email } = req.params;
  res.status(200).json({ message: "success", data_id: {id,email} });
});

app.post('/Store',(req,res)=>{
    // const data=req.body;
    res.send(
     "create a new data"
    );
});

app.post('/update/:id/email/:email',(req,res)=>{
    const {id,email}=req.params;
    res.json({
        message:"update data succesfully",
        data_id:{id,email}
    }

    );
});

app.post('/delete/:id/email/:email',(req,res)=>{
    const {id,email}=req.params;
    res.json({
        message:"delete data succesfully",
        data_id:{id,email}
    }

    );
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
