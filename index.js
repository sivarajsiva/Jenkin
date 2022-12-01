const express = require('express');
const app = express()
const port = 3100;

app.get('/', (req, res) => res.send('Welcome!'));
app.get('/check', function(request, response){
    response.sendFile(__dirname +'index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
