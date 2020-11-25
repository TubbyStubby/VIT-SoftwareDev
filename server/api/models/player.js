const mongoose = require('mongoose');

//todo: update player schema
//todo: make other models related to other game elements like skill, shots, etc..
const playerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    playerName: { type: String},
});

module.exports = mongoose.model('Player', playerSchema);