// const express = require("express");
// const app = express();
// const port = 3000;
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Student data");
// });

// app.get("/show/:id/email/:email", (req, res) => {
//   const { id,email } = req.params;
//   res.status(200).json({ message: "success", data_id: {id,email} });
// });

// app.post('/Store',(req,res)=>{
//     // const data=req.body;
//     res.send(
//      "create a new data"
//     );
// });

// app.post('/update/:id/email/:email',(req,res)=>{
//     const {id,email}=req.params;
//     res.json({
//         message:"update data succesfully",
//         data_id:{id,email}
//     }

//     );
// });

// app.post('/delete/:id/email/:email',(req,res)=>{
//     const {id,email}=req.params;
//     res.json({
//         message:"delete data succesfully",
//         data_id:{id,email}
//     }

//     );
// });

// app.listen(port, () => {
//   console.log(`server is running http://localhost:${port}`);
// });



const express = require("express");
const { body, param, validationResult } = require("express-validator");

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Student data");
});

app.get("/show/:id/email/:email", [
  param("id").isInt().withMessage("ID must be an integer"),
  param("email").isEmail().withMessage("Email must be valid")
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id, email } = req.params;
  res.status(200).json({ message: "success", data_id: { id, email } });
});

app.post("/Store", [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is required"),
  body("age").isInt({ min: 1 }).withMessage("Age must be a number")
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data = req.body;
  res.send("Created new data");
});

app.post("/update/:id/email/:email", [
  param("id").isInt().withMessage("ID must be an integer"),
  param("email").isEmail().withMessage("Email must be valid")
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id, email } = req.params;
  res.json({
    message: "Update data successfully",
    data_id: { id, email },
  });
});

app.post("/delete/:id/email/:email", [
  param("id").isInt().withMessage("ID must be an integer"),
  param("email").isEmail().withMessage("Email must be valid")
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id, email } = req.params;
  res.json({
    message: "Delete data successfully",
    data_id: { id, email },
  });
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
