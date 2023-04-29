const express = require("express");
const cors = require("cors");

const app= express();

app.use(cors());

app.options("*",(req, res, next) => {
  res.header('Access-Control-Allow-Origin',"*")
  res.header('Access-Control-Allow-Origin','GET,PUT,POST,OPTIONS');
  res.header('Access-Control-Allow-Origin', 'Authorization, Content-Length , X-Requested-With');
  res.send(200);
});

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

//const timeRoutes = require("./routes/time");
//app.use("/routes/time", timeRoutes);

app.get('/',(req, res) => {
  res.sendFile(__dirname+"index.html");
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname+"index.html");
});

app.get('/:word/echo', (req, res) => {
  res.json({"echo": req.params.word})
});

app.all('*',(req, res) => {
  res.send("invalid route");
})

const jsonData = {
    name: 'John Doe',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };
  
  // Create GraphQL query based on schema
  const gqlQuery = `
    query {
      user(name: "${jsonData.name}") {
        age: ${jsonData.age}
        address(city: "${jsonData.address.city}") {
          street: ${jsonData.address.street}
          state: ${jsonData.address.state}
          zip: ${jsonData.address.zip}
        }
      }
    }
  `;
  
  //console.log(gqlQuery);
  
  app.listen(3000,function(){
    console.log("server started on port 3000");
  });