import express from 'express'
import asyncHandler from 'express-async-handler'
import History from '../models/History.js'
const router = express.Router()

// @desc        Add timer information to the database
// @route       POST /
// @access      Public
router.post('/', asyncHandler(async (req, res) => {
    const actionPerformed = req.body.actionPerformed
    const timerState = {}
    timerState.ms = req.body.ms
    timerState.s = req.body.s
    timerState.m = req.body.m
    timerState.h = req.body.h
    console.log(req.body.ms, timerState)
    const newAction = new History({
        actionPerformed,
        timerState
    })

    // save the timestamp to the database.
    const newTimerState = await newAction.save()
    res.status(201).json(newTimerState)
}))

// @desc        get history
// @route       GET /history
// @access      Public
router.get('/history', asyncHandler(async (req, res) => {
    const history = await History.find({})
    res.json(history)
}))

export default router