import Alarm from "../models/alarm.model.js";

const sendNotification = async (alarmId) => {
    try {
        const alarm = await Alarm.findById(alarmId)
        console.log(`It is time for ${alarm.name}`);
    } catch (error) {
        console.log(error);
    }
}

export { sendNotification }