var express = require('express');
var app = express();
var path = require('path');
var axios = require('axios')
var cors = require('cors');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var session = require('express-session');
var port = process.env.PORT || 3000; 
;

app.use(cors({credentials: true, origin: 'http://localhost:8080'})); // cross port cookie when test
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/dist')); //makes dist the root for anything that index.html requires

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.listen(port, ()=>{
    console.log('Listening at ' + port);
});