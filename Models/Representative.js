const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const RepresentativeSchema = new Schema ({
    url: String,
	name: String,
    party: String,
    since: String,
    next: String
})

module.exports = mongoose.model('Representati e', RepresentativeSchema)