const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config()

//Middleware
app.use(cors());
app.use(express.json());


app.get('/', ( req, res) =>{
    res.send("Fine Gadgest server is running....");
})


app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
})
