console.log("Hello World");
import express from "express";
import { router } from "./routes/goalRoutes.js";
import { port } from "../config/config.js";

const app = express();

app.use("/api/goals", router);

app.listen(port, () => console.log(`Server started on port ${port}`));
