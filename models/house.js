const mongoose = require("mongoose") 
const houseSchema = mongoose.Schema({ 
 house_rooms: String, 
 house_area: String, 
 house_rent: Number 
}) 
 
module.exports = mongoose.model("House", 
houseSchema)

  