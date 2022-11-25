import './init-aliases';
import { config } from 'dotenv';
config();
import express, { Application } from 'express';
// import '@database/index';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './dataBase/index';
import { schema } from './schema';
import { jwtVerify } from './utils/jwtVerify';
import router from './utils/api/routes';
const app: Application = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);
const PORT = process.env.PORT || 8000;
const server = new ApolloServer({
  schema,
  context: async ({ req }: any) => {
    let { authorization }: any = req.headers;
    const tokenResult = await jwtVerify(authorization);
    req.role = tokenResult?.role;
    req.id = tokenResult?.id;
    return tokenResult;
  },
});
// EmailSender();
server.start().then((res) => {
  server.applyMiddleware({ app, path: '/opentable' });
  app.listen(PORT, () => {
    console.log(`Server is runnig at http://localhost:${PORT}/opentable`);
  });
});
export default server;
