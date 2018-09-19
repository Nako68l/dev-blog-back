import mongoose, { Schema } from "mongoose"


const PostsSchema: Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


export default mongoose.model('Posts', PostsSchema);