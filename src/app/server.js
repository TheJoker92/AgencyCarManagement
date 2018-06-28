//Required to et up the express framewok
const express = require('express');

//Initialize the express framework
//express() return an Express-Object
const app = express();

//Listen method of EO tells the server to listen for incoming requests
app.listen(8000, () => {
  console.log('Server started!');
});
