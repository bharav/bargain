'use strict';

var express = require('express');
var controller = require('./product.controller');
var config = require('../../config/environment');
//var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.getAllProductComparison);
router.post('/', controller.create);
router.get('/trending',getTerndngPrdCmp);
router.get('/:id',controller.getCmpDetail);
router.put('/:id',controller.updateCmp);
router.destroy('/:id',controller.destroy);


module.exports = router;