import mongoose from "mongoose";

// https://mongoosejs.com/docs/schematypes.html

const transactionSchema = mongoose.Schema({
    // transaction_id created by database
    painting_id: {type: String, required: true},
    artist_id: {type: String, required: true},
    owner_id: {type: String, required: true},
    buyer_id: String,
    type: {type: String, enum: ['sell, buy, barter']},
    quality: {String, enum: ['poor, fair, good, excellent']},
    offer: Number,
    date_created: {type: Date, required: true},
    active_listing: {type: Boolean, required: true},
    seller_accepted: Boolean,
    date_removed: Date
}, {collection: "transactions"})

export default transactionSchema