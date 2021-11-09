const mongoose = require("mongoose");

const flightschema = new mongoose.Schema(
  {
    companyImage: { type: String, required: true },
    companyName: [{ type: String, requitred: true }],
    dayOfTravel: { type: String, required: true },
    source: { type: String, required: true },
    sourceTime: { type: String, required: true },
    destination: { type: String, required: true },
    destinationTime: { type: String, required: true },
    dateOfTravel: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: String, required: true },
  //  price: [{ type: Object, requitred: true }],
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Flight = mongoose.model("flights", flightschema);

module.exports = Flight;