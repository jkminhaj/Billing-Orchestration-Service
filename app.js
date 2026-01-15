import express from "express";
import errorHandler from "./middlewares/error.middleware.js";
import cors from "cors";
import router from "./routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
// Centralized error handler
app.use(errorHandler);

app.use("/api", router);
app.get("/", (req, res) => {
    res.send("Server is working!");
})

export default app;