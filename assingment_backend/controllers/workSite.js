const workSiteRouter =  require('express').Router()
const workSiteSchema = require('../models/workSite')

workSiteRouter.get('/', ( req, res ) => {
    workSiteSchema.find({}).then(workSites => {
        res.json(workSites)
    })
})

module.exports = workSiteRouter