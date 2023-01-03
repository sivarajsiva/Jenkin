const express = require('express');
const app = express()
const port = 3100;

app.get('/check', (req, res) => res.send('Welcome to NodeJs!'));
app.get('/', function(request, response){
    response.sendFile(__dirname +'/index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
