import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import * as bodyParser from "body-parser";
import {userRouter} from "./routes/userRouter";
import cors from 'cors';
import path from 'path';
dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT;
app.use(cors());
// CORS
// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//    next();
// });

app.use(bodyParser.json());

app.use("/users", userRouter);
app.get('/', (req: Request, res: Response) => {
  // res.send('Express + TypeScript Server');
  res.sendFile(path.join(__dirname+'/acasa.html'));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});