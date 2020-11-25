const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const PvEMatch = require('../models/pvematch');

const checkAuth = require('../authware/check-auth');

function shotProbability(shotMod, ballMod) {
    return ((shotMod - ballMod) * 100) / shotMod;
}

router.get('/status', (req, res, next) => {
    PvEMatch.findById(req.body.matchId)
    .then(result => {
        res.status(200).json({'matchStatus': result});
    });
});

router.post('/shot', (req, res, next) => {
    PvEMatch.findById(req.body.matchId)
    .populate('currentBall')
    .populate('possibleShots')
    .populate('batsman')
    .populate('bowler')
    .populate('playingStyle')
    .exec(match => {
        shotIndex = match.possibleShots.indexOf(req.body.shot);
        if( shotIndex >= 0) {
            //todo: add playerStyle boosts to mods
            prob = shotProbability(match.possibleShots[shotIndex].mod, match.currentBall.mod);
            if(Math.random() <= prob) {
                //inc runs
                //report hit
            } else {
                //report miss
            }
        }
    });
});

module.exports = router;