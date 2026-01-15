import express from "express";
import errorHandler from "./middlewares/error.middleware.js";
import notFound from "./middlewares/notFound.middleware.js";
import cors from "cors";


const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(notFound);
app.use(errorHandler);

export default app ;