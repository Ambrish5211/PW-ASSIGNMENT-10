const http = require('http');

const men = [
   { 
     id: 1,
     name : "T-shirt",
     Brand : "Puma",
     Price : 2000,     
  }
];

const women = [ 
  {
     id: 1,
     name : "T-shirt",
     Brand : "Addidas",
     Price : 1000, 

  }
];

const server = http.createServer((req, res)=> {
  res.setHeader('Content-Type', 'application/json');

 if(req.url == '/'){
  res.statusCode = 200;
  res.write(JSON.stringify(message = "Welcome to men and women dummy data"));
  res.end();
 }
 else if(req.url === '/men'){
  res.statusCode = 200;
  res.write(JSON.stringify(men));
  res.end();
 }
 else if(req.url === '/women'){
  res.statusCode = 200;
  res.write(JSON.stringify(women));
  res.end();
 }
 else {
  res.statusCode = 404;
  res.end("Not a valid request");
 }
})

server.listen(8080, () => {
  console.log("server is running successfully at port : 4000");
})