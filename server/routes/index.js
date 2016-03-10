var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var router = express.Router();

mongoose.connect('mongodb://localhost/basic_skelly_jquery');

var Cat = mongoose.model('Cat', {name:String});

router.post('/add', function(req, res){
    console.log(req.body);
    var kitty = new Cat({name: req.body.name});
    kitty.save(function(err){
        if(err)console.log('meow %s', err);
        res.send(kitty.toJSON());
    });
});

router.get('/cats', function(req, res){
    return Cat.find({}).exec(function(err, cats){
        if(err) throw new Error(err);
        res.send(cats);
    });
});


router.get('/', function(req, res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;
