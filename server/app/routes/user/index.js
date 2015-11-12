'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function(req, res, next){
   User
       .find()
       .then(function(docs){
           res.json(docs);
       })
       .then(null, next);
});

router.get('/:id', function(req, res, next){
    User
        .findOne({_id: req.params.id})
        .then(function(doc){
            console.log(doc);
            res.json(doc);
        })
        .then(null, next);
});

router.put('/', function(req, res, next){
   User
       .findOne({_id: req.body._id})
       .then(function(doc){
            for(var key in req.body){
                if(key !== 'password'){
                    doc[key] = req.body[key];
                }
            }
            return doc.save();
       })
       .then(function(doc){
           res.json(doc);
       })
       .then(null, next);
});


router.post('/', function(req, res, next){
    var user = new User(req.body);
    user
        .save()
        .then(function(doc){
            res.json(doc);
        })
        .then(null, next);
});
