var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000; 

app.use(cors({credentials: true, origin: 'http://localhost:8080'})); // cross port cookie when test
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//makes dist the root for anything that index.html requires
app.use(express.static(__dirname + '/dist')); 

//change to mLab on production
// mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true}).then(()=>console.log('DB Connected!'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.listen(port, ()=>{
    console.log('Listening at ' + port);
});