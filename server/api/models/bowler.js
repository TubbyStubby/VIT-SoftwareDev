const mongoose = require('mongoose');

const bowlerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    bowlerName: String,
    playingStyle: {type: mongoose.Schema.Types.ObjectId, ref: 'PlayingStyle'},
});

module.exports = mongoose.model('Bowler', bowlerSchema);