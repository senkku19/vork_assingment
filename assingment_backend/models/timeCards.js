const mongoose = require('mongoose')

const timeCardSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    overTime: String,
    breakTime: {
        start: String,
        end: String
    },
    travellingTime: String,
    kokoPaivaRaha: Boolean,
    osaPaivaRaha: Boolean,
    ateriaKorvaus: Boolean,
    sairaana: Boolean
})

timeCardSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('TimeCard', timeCardSchema);