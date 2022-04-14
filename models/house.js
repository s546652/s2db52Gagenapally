const mongoose = require("mongoose") 
const houseSchema = mongoose.Schema({ 
 house_rooms: Number, 
 house_area: String, 
 house_rent: Number 
}) 
 
module.exports = mongoose.model("house", houseSchema) 