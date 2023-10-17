const express = require('express');
// const bodyParser = require('body-parser');
const AppRoutes = require('./src/routes/hall.js')
const app = express();
// app.use(bodyParser.json());

app.use(express.json());

app.use('/',AppRoutes)


app.listen(8000, ()=> console.log("Server listening to port 8000"));