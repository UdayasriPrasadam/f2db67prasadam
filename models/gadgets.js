const mongoose = require("mongoose")
const gadgetsSchema = mongoose.Schema({
gadget_type:  {
    type: String,
    required: [true, "Name required"]
},
gadget_version: String,
gadget_price: Number
})
module.exports = mongoose.model("gadgets", gadgetsSchema)
