import express from 'express'
import userRoutes from './routes/userRoute';
import 'dotenv/config'

const app = express();

app.use(express.json());
app.use('/user', userRoutes);

export default app;
