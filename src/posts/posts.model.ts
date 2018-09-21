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
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

export default mongoose.model('Posts', PostsSchema);