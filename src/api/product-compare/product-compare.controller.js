'use strict';

var ProductCompare = require('./product-compare.model');
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
    var prdCompare = new ProductCompare(req.body);
    prdCompare.save(function (err, prdCompare) {
        if (err) return validationError(res, err);
        res.json(prdCompare);
    });
};

/**
 * Get a All product
 */
exports.getAllProductComparison = function (req, res, next) {
    ProductCompare.find(function (err, prdCompare) {
        if (err) return validationError(res, err);
        res.json(prdCompare);
    })
};

/*
  Get compare detail for a particular product
 */
exports.getCmpDetail = function(req,res,next){
  var prdCmpId = req.params.id;

  ProductCompare.findById(prdCmpId, function (err, prdCompare) {
    if (err) return next(err);
    if (!prdCompare) return res.status(401).send('Unauthorized');
    res.json(prdCompare);
  });
};

/*
  Get compare detail for a product as per the filter criteria
 */
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
    ProductCompare.find({ $or: queryFilter }, function (err, prdCompare) {
        if (err) return validationError(res, err);
        res.json(prdCompare);
    })
};

exports.destroy = function(req, res) {
  ProductCompare.findByIdAndRemove(req.params.id, function(err, prdCompare) {
    if(err) return res.status(500).send(err);
    return res.status(204).send('No Content');
  });
};




