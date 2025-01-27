const mongoose = require('mongoose')

const workSiteSchema = new mongoose.Schema({
    title: String
})

workSiteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('WorkSite', workSiteSchema);