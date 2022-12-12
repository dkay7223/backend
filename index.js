import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import {get, employeeRoutes} from './exports.js'


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

const URI = "mongodb+srv://Admin:admin123@cluster0.qjj0tok.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(` Server Running on: http://localhost:${PORT} \n MongoConnected: https://cloud.mongodb.com`)))
    .catch((error) => console.log(error));

app.get('/', get)
app.use('/employees', employeeRoutes);