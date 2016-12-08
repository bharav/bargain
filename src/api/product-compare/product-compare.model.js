var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var ProductCmpSchema = new Schema({
    title: String,
    description: String,
    shorttitle: String,
    brand: String,
    image: String,
    category: String,
    deals:[{
        company: String,
        price: String,
        weblink: String,
        website: String
    }]
});


module.exports = mongoose.model('ProductCmp', ProductCmpSchema);