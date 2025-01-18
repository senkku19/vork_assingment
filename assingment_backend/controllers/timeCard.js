const timeCardsRouter = require('express').Router()
const { response } = require('express')
const TimeCard = require('../models/timeCards')

timeCardsRouter.get('/', ( req, res ) => {
    TimeCard.find({}).then(timeCards => {
        res.json(timeCards)
    })
})

timeCardsRouter.post('/', ( req, res, next ) => {
    const body = req.body

    const timeCard = new TimeCard({
        date: body.date,
        startTime: body.startTime,
        endTime: body.endTime || '0',
        overTime: body.overTime || '0',
        breakTime: {
            start: body.breakTime?.start || '',
            end: body.breakTime?.end || ''
        },
        travellingTime: body.travellingTime || '0',
        kokoPaivaRaha: body.kokoPaivaRaha || false,
        osaPaivaRaha: body.osaPaivaRaha || false,
        ateriaKorvaus: body.ateriaKorvaus || false,
        sairaana: body.sairaana || false
    })

    timeCard.save()
        .then(savedTimeCard => {
            res.json(savedTimeCard)
        })
        .catch(error => next(error))
})

timeCardsRouter.delete('/:id', ( req, res, next ) => { 
    TimeCard.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

timeCardsRouter.put('/:id', (req, resp, next) => {
    const body = request.body

    const timeCard = {
        date: body.date,
        startTime: body.startTime,
        endTime: body.endTime,
        overTime: body.overTime,
        breakTime: {
            start: body.breakTime?.start,
            end: body.breakTime?.end
        },
        travellingTime: body.travellingTime,
        kokoPaivaRaha: body.kokoPaivaRaha,
        osaPaivaRaha: body.osaPaivaRaha,
        ateriaKorvaus: body.ateriaKorvaus,
        sairaana: body.sairaana
    }

    TimeCard.findByIdAndUpdate(req.params.id, timeCard, { new: true })
        .then(updatedTimeCard => {
            response.json(updatedTimeCard)
        })
        .catch(error => next(error))
})

module.exports = timeCardsRouter