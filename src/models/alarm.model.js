import mongoose, { Schema } from "mongoose";

const AlarmSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})
const Alarm = mongoose.model('alarm', AlarmSchema)

export default Alarm