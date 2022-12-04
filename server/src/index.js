const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();

const fs = require ('fs');




app.all('/*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.use(cors());
app.use(bodyparser.json());

app.get('/user/:id', (req, res) => {
    let gID = req.params.id;
    
    console.log(gID);
        
        
    res.status(200).send({status: "ok", message: "1 User data", data: gID});
      
}) 

app.get('/saveinfo/:id', (req,res) => {
    let gID = req.params.id;
    
    fs.appendFile('//192.168.56.1/prueba/documento4.txt', 'texto que contiene el documento etc', 
        (error) =>{
            if(error)
                throw error;
            console.log("archivo creado: ", gID);
        })
})


app.listen(3000, (req, res)=>{
    console.log('SERVER RUNNING IN http://localhost:3000');
});