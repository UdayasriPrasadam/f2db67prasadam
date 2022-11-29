const mongoose = require("mongoose")
const gadgetsSchema = mongoose.Schema({
gadget_type: String,
gadget_version: String,
gadget_price: {
    type: Number,
    min: [100, "Min value is 100"],
    max: [10000, "Max value is 5000"]
}
})
module.exports = mongoose.model("gadgets", gadgetsSchema)
