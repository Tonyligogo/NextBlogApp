import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: false,
    },
    postedBy:{
        type: Schema.Types.ObjectId, ref: 'User'
    }
    // ,
    // totalStars: {
    //     type: Number,
    //     default: 0,
    // },
    // starNumber: {
    //     type: Number,
    //     default: 0,
    // }
},{timestamps: true});

export default mongoose.model('Post', postSchema)