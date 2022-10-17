console.log('Hello World')
import express from "express";

import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT; 
const app = express();   

app.use('/api/goals', import("./routes/goalRoutes"))

app.listen(port, () => console.log(`Server started on port ${port}`))