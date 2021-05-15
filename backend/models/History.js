import mongoose from 'mongoose'

// mongoose schema for the database that stores timestamps.
const historySchema = mongoose.Schema({
    actionPerformed: { type: String },
    timerState: {
        ms: { type: Number },
        s: { type: Number },
        m: { type: Number },
        h: { type: Number }
    }
}, { timestamps: true })

const History = mongoose.model('History', historySchema)

export default History