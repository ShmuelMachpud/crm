import express from 'express';
import cors from 'cors'
import {connectDB, syncDB} from './configs/connectDB'
import {createExpressMiddleware} from '@trpc/server/adapters/express'
import {createContext} from './trpc'
import {appRouter} from './routes/trpcRoutes'
import {User} from './models/models'

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());

app.use('/trpc', createExpressMiddleware({
  router: appRouter,
  createContext
}))

app.get('/', async(req, res) => {
  res.send(await User.findAll())
  ;
});

const startConnect = async() => {
  await connectDB(),
  await syncDB(),
  console.log(`server is running http://${host}:${port}`);
}

app.listen(port, host, () => {
  startConnect()
});
