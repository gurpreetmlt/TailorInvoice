const mongoose = require('mongoose');

//mongoose Schema
const customSchema = new mongoose.Schema({
  tailorName: {
    type: String,
    required: true
  },
  tailorAddress: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  customerAddress: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  item : [
    {
      sizeType:{
        type:String,
        required:true
      },
      size:{
        type:Number,
        required:true
      }
    }
],
  finalPrice: {
    type: Number,
    required: true
  },
  terms: {
    type: String,
    required: true
  },
  invoiceDescription: {
    type: String,
    required: true
  }
});



module.exports = mongoose.model('invoiceStorage', customSchema)
