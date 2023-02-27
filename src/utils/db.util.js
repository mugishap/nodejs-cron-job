import mongoose from "mongoose"

export const connectDB = async () => {
    mongoose.set('strictQuery', true)
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "cron-job",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err) => {
        if (err) throw new Error("Failed to connect to database")
        console.log("[LOG]:Database connection successful");
    })
}