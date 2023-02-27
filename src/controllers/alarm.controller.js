import Alarm from "../models/alarm.model.js";
import { getCronExpression } from './../utils/expression.util.js'
import { sendNotification } from './../utils/notify.util.js'
import cron from "node-cron"

export const createAlarm = async (req, res) => {
    try {
        const { name, time } = req.body
        const cronString = getCronExpression(parseInt(time))
        console.log(cronString);
        const alarm = new Alarm({
            name,
            time: cronString
        })
        alarm.save()

        cron.schedule(cronString, () => {
            sendNotification(alarm.id)
        })

        return res.status(200).json({ message: "Alarm created successfully", alarm, success: true })
    } catch (error) {
        console.log(error);
    }
}