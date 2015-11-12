'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');

var schema = new mongoose.Schema({
    title: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    content: String,
    tags: [{text: String}],
    ModifiedDate : { type : Date, default: Date.now },
    views: {type: Number, default: 0},
    hits: {type: Number, default: 0},
    comments: [{
        comment: String,
        author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        ModifiedDate : { type : Date, default: Date.now },
        tags: [{text: String}]
    }]
});

mongoose.model('Question', schema);
