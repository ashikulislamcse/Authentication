import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './Database/Database.js';
import userRouter from './Routes/userRoute.js';
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter)

const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});
