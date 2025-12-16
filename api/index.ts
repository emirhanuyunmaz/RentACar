import 'reflect-metadata';
import express, { Application } from 'express';
import cors from 'cors';
import { config } from './src/utils/config';
import UserRouter from './src/routes/userRoutes';
import CarRouter from './src/routes/carRoutes';
// import AdminRouter from "./src/routes/ad"
import helmet from 'helmet';
import compression from 'compression';

const app: Application = express();
const PORT = config.PORT || 3002;

app.use(helmet()); // Güvenlik için gerekli
app.use(compression()); // Daha hızlı olması için veri küçültme(zip) işlemi
app.use(cors());
app.use('/uploads', express.static('uploads')); // Uploads kasörünün dışarıya açılması işlemi.
app.use(express.json({ limit: 50000 }));
app.use('/user', UserRouter);
app.use('/car', CarRouter);
app.get('/', (req, res) => {
  res.status(200).json({ data: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`Server is Fire at http://localhost:${PORT}`);
});
