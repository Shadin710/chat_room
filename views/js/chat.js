var socket =  io.connect('http://localhost:3000');

var message = document.getElementById('message');
    btn = document.getElementById('send');
    output= document.getElementById('output');
    handle= document.getElementById('handle');

btn.addEventListener('click',()=>{
    socket.emit('chat',{
        handle:handle.value,
        message: message.value
    });
});