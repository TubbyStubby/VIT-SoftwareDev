const mongoose = require('mongoose');

const playingStyleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    styleName: {type: String, required: true},
    boost: {type: Number, required: true}
});

module.exports = mongoose.model('PlayingStyle', playingStyleSchema);