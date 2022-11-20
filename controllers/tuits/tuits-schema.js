import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    topic: String,
    time: String,
    title: String,
    image: String,
    userName: String,
    handle: String,
    replies: Number,
    retuits: Number,
    dislikes: Number,
}, {collection: 'tuits'});

export default schema;