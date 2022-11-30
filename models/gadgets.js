const mongoose = require("mongoose")
const gadgetsSchema = mongoose.Schema({
gadget_type:  {
        type: String,
        required: [true, "Name required"]
    },
gadget_version: String,
gadget_price: {
    type: Number,
    min: [100, "Min value is 100"],
    max: [8000, "Max value is 8000"]
}
})
module.exports = mongoose.model("gadgets", gadgetsSchema)
