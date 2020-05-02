var socket =  io();

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

socket.on('chat',(data)=>{
    output.innerHTML += '<p><strong>'+data.handle+'</strong> <br>'+data.message+'</p>';
})