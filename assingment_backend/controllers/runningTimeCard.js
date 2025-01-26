const timeCardsRouter = require('express').Router()
const runningTimeCard = require('../models/runningTimeCard')

timeCardsRouter.get('/', ( req, res ) => {
    runningTimeCardTimeCard.find({}).then(timeCards => {
        res.json(timeCards)
    })
})

timeCardsRouter.post('/', ( req, res, next ) => {
    const body = req.body

    const timeCard = new runningTimeCard({
        date: body.date,
        startTime: body.startTime,
        endTime: body.endTime || '0',
        overTime: body.overTime || '0',
        breakStart: body.breakStart || '',
        breakEnd: body.breakEnd || '',
        travellingTime: body.travellingTime || '0',
        compensation: body.compensation
    })

    timeCard.save()
        .then(savedTimeCard => {
            res.json(savedTimeCard)
        })
        .catch(error => next(error))
})

timeCardsRouter.get('/:id', async (req, res) => {
    const timeCard = await runningTimeCard.findById(req.params.id);
    
    if (timeCard) {
        res.json(timeCard)
    } else {
        res.status(404).end
    }
})

timeCardsRouter.delete('/:id', ( req, res, next ) => { 
    runningTimeCard.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

timeCardsRouter.put('/:id', async (req, resp, next) => {
    const body = req.body

    const updatedTimeCard = {
        date: body.date,
        startTime: body.startTime,
        endTime: body.endTime,
        overTime: body.overTime,
        breakStart: body.breakStart,
        breakEnd: body.breakEnd,
        travellingTime: body.travellingTime,
        compensation: body.compensation
    }

    runningTimeCard.findByIdAndUpdate(req.params.id, updatedTimeCard, { new: true })
        .then(updatedTimeCard => {
            resp.json(updatedTimeCard)
        })
        .catch(error => next(error))
})

module.exports = timeCardsRouter