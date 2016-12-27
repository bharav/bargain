/**
 * Main application routes
 */

'use strict';
var path = require('path');

module.exports = function(app) {
  // Insert routes below
  app.use('/api/reqQuote', require('./api/bargain-request'));
 // app.use('/api/product', require('./api/product'));
  app.use('/api/common/images', require('./api/common/images'));
  app.use('/api/common/navigation', require('./api/common/navigation'));
  app.use('/auth', require('./auth'));
  app.use('/api/users', require('./api/user'));
};