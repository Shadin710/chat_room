
require('dotenv').config();
const express = require('express');
const app =  express();
const bodyParser=  require('body-parser');
const morgan = require('morgan');
const path = require('path');
const socket = require('socket.io');


//some setting code
app.use(express.static('views'));
app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));
//end



const port = process.env.PORT   || 3000;
const server = app.listen(port,()=>{

    console.log(`listening to ${port}....`)
});



app.get('/',(req,res)=>{
    res.render('index');
    const io= socket(server);

    io.on('connection',(socket)=>{
        console.log(`socket connected...${socket.id}`);

        socket.on('chat',(data)=>{
            io.sockets.emit('chat',data);
        });
    });
});
