var express = require('express');
var index = require('./routes/index.js');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use('/', index);
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 5000));

app.get('/*', function(req, res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function(){
    console.log('listening on port', app.get('port'));
});
