const express = require('express')

const app = express()
 

app.get('/random', (req, res) =>{
  res.status(200).json({ random : Math.floor(Math.random()*10000) + 1});
})



app.listen(8000, () => {
  console.log("Server is listening at port 8000");
})