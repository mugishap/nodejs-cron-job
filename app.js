import express from "express"
import cron from "node-cron"

const app = express()

cron.schedule("* * * * * * ", () => {
    console.log(`The current time is: ${Date.now().toLocaleString()}`)
})

app.listen(3000, () => {
    console.log("[LOG]: Server up on port 3000");
})
