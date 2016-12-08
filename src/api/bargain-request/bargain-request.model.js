var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var RequestSchema = new Schema({
    title: String,
    requesterId: String,
    brand: String,
    description: String,
    requestDuration: Number,
    expectedRate: Number,
    expectedQuantity: Number,
    category: String,
    response: [
        {
            responsedBy: String,
            responseRate: Number,
            responseDescription: String
        }
    ],
    images: [
        { url: String }
    ],
    status: String
});


module.exports = mongoose.model('RequestQuote', RequestSchema);