var mongoose = require('mongoose');
var path = require('path');

// import controllers
var players = require('../controllers/players.js');

module.exports = function(app) {
    app.get('/player', players.getPlayers);
    
    app.post('/player', players.makePlayer);

    app.delete('/player/:id', players.deletePlayer);

    app.put('/player/:id', players.updatePlayerStatus);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve('./client/dist/index.html'));
    });
};