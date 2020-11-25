const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const PvEMatch = require('../models/pvematch');

const checkAuth = require('../authware/check-auth');
const Player = require('../models/player');

router.post('/new-match', (req, res, next) => {
    if(req.body.gameMode === 'pve') {
        //todo add a random bowler
        const pvematch = new PvEMatch({
            _id: mongoose.Types.ObjectId(),
            playerName: req.body.playerName,
            batsman: req.body.batsman,
        });
        pvematch.save()
        .then(result => {
            console.log(result);
            res.status(200).json();
        });
    }
});

module.exports = router;