import { Router } from "express"
import { createAlarm } from "../controllers/alarm.controller.js"

const alarmRouter = Router()
alarmRouter.post("/create", createAlarm)

export {
    alarmRouter
}