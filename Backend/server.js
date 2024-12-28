import express from 'express';
//import cors from 'cors';
import pageRouter from './routes/pagesroutes.js';
import { connectDB } from './connections/db.js';

const app = express();
const PORT = 5000;

//app.use(cors());
app.use(express.json());

connectDB();

app.use('/', pageRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});