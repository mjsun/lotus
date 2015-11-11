'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

var ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

router.get('/', function(req, res, next){
    Question
        .find()
        .populate('comments.author')
        .exec()
        .then(function(docs){
            res.json(docs);
        })
        .then(null, next);
});

router.get('/:id', function(req, res, next){
    Question
        .findOne({_id: req.params.id})
        .populate('comments.author')
        .exec()
        .then(function(doc){
            res.json(doc);
        })
        .then(null, next);
});

router.post('/comment', ensureAuthenticated, function(req, res, next){
    var id = req.body.questionId;
    var obj = {
        comment: req.body.comment,
        author: req.body.author,
        tags: req.body.tags
    };
    Question
        .findOne({_id:id})
        .then(function(doc){
            if(doc.comments.length > 0){
                doc.comments.push(obj);
            }
            else {
                doc.comments = [obj];
            }
            return doc.save();
        })
        .then(function(doc){
            res.json(doc);
        })
        .then(null, next);
});

router.post('/', ensureAuthenticated, function (req, res, next) {
    var question = new Question(req.body);
    question
        .save()
        .then(function(doc){
            res.json(doc);
        })
        .then(null, next);
});

router.put('/', ensureAuthenticated, function (req, res, next) {
    Question
        .findOne({_id: req.body._id})
        .then(function(doc){
            _.forEach(req.body, function(val, key){
                doc[key] = val;
            });
            return doc.save();
        })
        .then(function(doc){
            res.json(doc);
        })
        .then(null, next);
});

router.put('/views', function (req, res, next) {
    Question
        .findOne({_id: req.body._id})
        .then(function(doc){
            doc.views ++;
            return doc.save();
        })
        .then(function(doc){
            res.json(doc);
        })
        .then(null, next);
});

router.put('/hits', function (req, res, next) {
    Question
        .findOne({_id: req.body._id})
        .then(function(doc){
            doc.hits ++;
            return doc.save();
        })
        .then(function(doc){
            res.json(doc);
        })
        .then(null, next);
});
