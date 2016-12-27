var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var CarousalSchema = new Schema({
    image: String,
    redirectUrl:String
});

module.exports = mongoose.model('RequestQuote', CarousalSchema);