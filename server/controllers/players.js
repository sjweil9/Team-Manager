var mongoose = require('mongoose');
// import packages

// import models
var Player = mongoose.model('Player');

module.exports = {
    getPlayers: (req, res) => {
        Player.find({}, (error, players) => {
            if (error) {
                console.log(error);
            }
            return res.json(players);
        });
    },
    makePlayer: (req, res) => {
        req.body.status = {
            1: 'undecided',
            2: 'undecided',
            3: 'undecided'
        };
        const player = new Player(req.body);
        player.save((error) => {
            if (error) {
                console.log(error);
            }
            return res.json(player);
        });
    },
    deletePlayer: (req, res) => {
        Player.remove({_id: req.params.id}, (error) => {
            if (error) {
                console.log(error);
                return res.json({success: false});
            }
            return res.json({success: true});
        });
    },
    updatePlayerStatus: (req, res) => {
        Player.findOne({_id: req.params.id}, (err, player) => {
            if (err) {
                console.log(err);
                return res.json({success: false});
            }
            let new_status = player.status;
            new_status[req.body.game] = req.body.status;
            player.status = new_status;
            Player.update({_id: req.params.id}, {$set: {status: new_status}}, (err, updated_player) => {
                if (err) {
                    console.log(err);
                    return res.json({success: false});
                }
                return res.json(player);
            });
        });
    }
};