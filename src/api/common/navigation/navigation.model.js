var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var navigationSchema = new Schema({
    nav_icon_web: String,
    nav_icon_android:String,
    nav_icon_ios:String,
    label:String,
    sequence:String,
    Url:String
});

module.exports = mongoose.model('Navigation', navigationSchema);