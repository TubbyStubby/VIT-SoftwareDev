const mongoose = require('mongoose');

const batsmanSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    batsmanName: String,
    playingStyle: {type: mongoose.Schema.Types.ObjectId, ref: 'PlayingStyle'},
});

module.exports = mongoose.model('Batsman', batsmanSchema);