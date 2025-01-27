const mongoose = require('mongoose')
const workSite = require('./workSite')

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
    breakStart: String,
    breakEnd: String,
    travellingTime: String,
    compensation: {
        type: String,
        enum: ['kokopaivaraha', 'osapaivaraha', 'ateriakorvaus', 'sairaana'],
        default: 'kokopaivaraha'
    },
    workSite: String
})

timeCardSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('TimeCard', timeCardSchema);