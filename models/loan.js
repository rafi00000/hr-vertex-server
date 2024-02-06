const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const loanSchema = new Schema({
    'user':{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    'amount':{
        type : Number,
        required: true,
    },
    'reason':{
        type : String,
        required: true,
    },
    'date':{
        type : Date,
        required: true,
    },
})
const loan = model('loan',loanSchema)
module.exports = loan