import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
            console.log("MONGODB_URI: ", process.env.MONGODB_URI);
            await connectDB();

            app.on("error", (error) => {
            console.log("Error", error);
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port:
                ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("MongoDB connection failed (index.js)!!!", error);
    }
}

startServer();