import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import express from "express"
import { alarmRouter } from "./src/routes/alarm.route.js"
import { connectDB } from "./src/utils/db.util.js"

const app = express()

connectDB()

app.use(bodyParser.json({ limit: '1mb' }))
app.use(cookieParser())
app.use("/alarm", alarmRouter)

app.listen(3000, () => {
    console.log("[LOG]: Server up on port 3000");
})
