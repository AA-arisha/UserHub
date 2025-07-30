import cors from 'cors';
import express from 'express';
import registerRoute from './Routes/registerRoute.js'
import cookieParser from "cookie-parser";
import './Queues/emailWorker.js'; // Start the worker
const app = express();
import dotenv from 'dotenv';
dotenv.config();
app.use(express.json() );
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use('/api' ,registerRoute );
app.listen(5000, ()=>{
  console.log('Server running on http://localhost:5000');
})
