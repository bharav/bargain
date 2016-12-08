'use strict';

var _ = require('lodash');
var Images = require('./images.model');

var fs = require('fs');
var mongoose = require("mongoose");
var Grid = require('gridfs-stream');
var GridFS = Grid(mongoose.connection.db, mongoose.mongo);

// Get list of imagess
// exports.index = function(req, res) {
//   Images.find(function (err, imagess) {
//     if(err) { return handleError(res, err); }
//     return res.json(200, imagess);
//   });
// };

// Get a single images
exports.show = function(req, res) {
  var readstream = GridFS.createReadStream({
    filename: req.params.id
  });
  readstream.on('error', function (err) {
  	return res.send(404);
  });

  readstream.pipe(res);
};

// Creates a new images in the DB.
// exports.create = function(req, res) {
//   Images.create(req.body, function(err, images) {
//     if(err) { return handleError(res, err); }
//     return res.json(201, images);
//   });
// };

// Updates an existing images in the DB.
exports.update = function(req, res) {
  var writestream = GridFS.createWriteStream({
    filename: req.params.id
  });
  req.pipe(writestream);

  res.send(201);
  // if(req.body._id) { delete req.body._id; }
  // Images.findById(req.params.id, function (err, images) {
  //   if (err) { return handleError(res, err); }
  //   if(!images) { return res.send(404); }
  //   var updated = _.merge(images, req.body);
  //   updated.save(function (err) {
  //     if (err) { return handleError(res, err); }
  //     return res.json(200, images);
  //   });
  // });
};

// Deletes a images from the DB.
// exports.destroy = function(req, res) {
//   Images.findById(req.params.id, function (err, images) {
//     if(err) { return handleError(res, err); }
//     if(!images) { return res.send(404); }
//     images.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };

// function handleError(res, err) {
//   return res.send(500, err);
// }
