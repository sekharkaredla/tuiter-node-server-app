import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import TuitsA8Controller from "./controllers/tuits/tuits-a8-controller.js";

import mongoose from "mongoose";

const app = express()

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://0.0.0.0:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

app.use(cors())
app.use(express.json());

HelloController(app)
UserController(app)
TuitsController(app)
TuitsA8Controller(app)

app.listen(process.env.PORT || 4000)