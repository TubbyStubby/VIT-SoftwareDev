const mongoose = require('mongoose');

//todo: change bowler, batsman, ball and shot 's types to proper schemas 
const pveMatchSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    playerName: { type: mongoose.Schema.Types.ObjectId, ref: 'Player'},
    bowler: String,
    batsman: String,
    currentRuns: {type: Number, default: 0, min: 0},
    lastBallRuns: {type: Number, default: 0, min: 0},
    currentBall: {type: String, default: ''},
    possibleShots: {type: [String], default: []}
});

module.exports = mongoose.model('PvEMatch', pveMatchSchema);