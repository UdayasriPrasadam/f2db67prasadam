const mongoose = require("mongoose")
const gadgetsSchema = mongoose.Schema({
    gadget_type: String,
    gadget_price: Number,
    gadget_version: String
})
module.exports = mongoose.model("gadgets",
gadgetsSchema)