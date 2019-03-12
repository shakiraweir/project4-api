const mongoose = require("../db/connection");
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const SenatorSchema = new Schema ({
    url: String,
	name: String,
    party: String,
    since: String,
    next: String
})

module.exports = mongoose.model('Senator', SenatorSchema)