const express = require('express')
const db = require('./config/db')
const cors = require('cors')
const axios = require('axios')

const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get("/test", (req,res)=>{

    const id = req.params.id;
     db.query("SELECT * FROM Users WHERE FirstName = 'Liheng'", id, 
     (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
        });   });
/*
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  db.query("SELECT * FROM Users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
*/
axios.post('https://ox3mhupewi.execute-api.us-east-2.amazonaws.com/stage')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})