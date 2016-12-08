'use strict';

var RequestQuote = require('./bargain-request.model');
//var passport = require('passport');
var config = require('../../config/environment');
//var jwt = require('jsonwebtoken');

var validationError = function (res, err) {
    return res.status(422).json(err);
};

/**
 * Creates a new product
 */
exports.create = function (req, res, next) {
    var newRequest = new RequestQuote(req.body);
    newRequest.save(function (err, request) {
        if (err) return validationError(res, err);
        res.json(request);
    });
};

/**
 * Get a All product
 */
exports.getAllRequests = function (req, res, next) {
    RequestQuote.find(function (err, requestQuote) {
        if (err) return validationError(res, err);
        res.json(requestQuote);
    })
};

exports.filter = function (req, res, next) {
    var criteria = req.params.criteria;
    var queryParameter = criteria.split('&');
    var queryFilter = [];
    for(var i = 0; i < queryParameter.length; i++) {
       var  tempParVal = queryParameter[i].split('=');
       var tempObj= {};
       tempObj[tempParVal[0]]=tempParVal[1];
       queryFilter.push(tempObj);
    }
    RequestQuote.find({ $or: queryFilter }, function (err, requestQuote) {
        if (err) return validationError(res, err);
        res.json(requestQuote);
    })
};

exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.status(500).send(err);
    return res.status(204).send('No Content');
  });
};

