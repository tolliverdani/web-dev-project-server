import mongoose from "mongoose";

// https://mongoosejs.com/docs/schematypes.html

//TODO: I want the collection to be created when a user account is created
const collectionSchema = mongoose.Schema({
    // collection_id created by database, so should be already unique and is required
    user_id: {type: String, required: true, unique: true},
    contents:
        [{
            "id": String,
            "title": String,
            "url": String,
            "artistUrl": String,
            "artistName": String,
            "artistId": String,
            "image": String,
            "completionYear": Number,
            status: {type: String, enum: ['public', 'private']}
        }]
}, {collection: "collection"})

export default collectionSchema;