'use strict';

var express = require('express');
var controller = require('./carousal.controller');
var config = require('../../config/environment');
//var auth = require('../../auth/auth.service');

var router = express.Router();
router.get('/', controller.getCarousal);
router.post('/', controller.create);
//router.get('/trending', controller.trending);
//router.get('/filter/:criteria',controller.filter);
//router.put('/response/:id',controller.bidResponse)
router.delete('/:id',controller.destroy);
//router.put('/:id',controller.modifyRequest)

module.exports = router;