const express = require('express')

const app= express()

app.get('/', (req, res) => {
  res.json({msg : 'i am home page'});
})

app.get('/about', (req, res) => {
  res.json({msg:`I am about page`});
})

app.get('/contact', (req, res) => {
  res.json({email:`support@pwskills.com`});
})

app.listen(4040,()=>{
  console.log('Server is connected to port 4040');
})
