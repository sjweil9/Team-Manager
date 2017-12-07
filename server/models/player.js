var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: 2
    },
    position: {
        type: String,
        required: false
    },
    status: {
        1: {type: String},
        2: {type: String},
        3: {type: String}
    }
}, {timestamps: true});

var Player = mongoose.model("Player", PlayerSchema);