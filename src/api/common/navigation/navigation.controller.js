'use strict';

var NavigationLink = require('./navigation.model');
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
    var newNavLink = new NavigationLink(req.body);
    newNavLink.save(function (err, request) {
        if (err) return validationError(res, err);
        res.json(request);
    });
};

/**
 * Get a All product
 */
exports.getNavigation = function (req, res, next) {
    RequestQuote.find(function (err, requestQuote) {
        if (err) return validationError(res, err);
        res.json(requestQuote);
    })
};

exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, carousal) {
    if(err) return res.status(500).send(err);
    return res.status(204).send('No Content');
  });
};

