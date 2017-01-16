'use strict';

var express = require('express'),
    app = express();

app.use(express.static('/public'));

app.route('/polls')
    .get(function(req, res){
        res.send('show all polls');
    })
    .post(function(req, res){
        res.send('create new poll');
    });

app.route('/polls/:id')
    .get(function(req, res){
        res.send('show poll');
    })
    .put(function(req, res){
        res.send('update poll');
    })
    .delete(function(req, res){
        res.send('delete poll');
    });

app.get('/polls/new', function(req, res){
    res.send('new form for poll');
});

app.get('/polls/:id/edit', function(req, res){
    res.send('show edit form for poll with values');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server started...');
});