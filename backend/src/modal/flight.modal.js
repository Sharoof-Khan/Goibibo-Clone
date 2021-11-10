const mongoose = require("mongoose");

const flightschema = new mongoose.Schema(
  {
    companyImage: { type: String, required: true },
    companyName: [{ type: String, requitred: true }],
   // dayOfTravel: { type: String, required: true },
    from: { type: String, required: true },
    //sourceTime: { type: String, required: true },
    destination: { type: String, required: true },
   // destinationTime: { type: String, required: true },
    //dateOfTravel: { type: String, required: true },
    departure: { type: String, required: true },
    return: { type: String, required: true },
    tickettype: { type: String, required: true},
    tickets: { type: String, required: true},
   
  //  price: [{ type: Object, requitred: true }],
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Flight = mongoose.model("flight", flightschema);

module.exports = Flight;