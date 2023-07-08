const express = require('express')

const app = express()
let count = Math.floor(Math.random()*100) + 1

app.get('/', (req, res) =>{
  res.status(200).json({ counter:count});
})

app.get('/increment', (req, res) => {
  count++;
  res.status(200).json({counter: count})
})

app.get('/decrement', (req, res) => {
  count--;
  res.status(200).json({counter: count})
})

app.listen(8080, () => {
  console.log("Server is listening at port 8080");
})