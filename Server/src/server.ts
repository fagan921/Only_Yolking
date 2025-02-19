import express from 'express';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import db from './config/connection.js'
import { ApolloServer } from '@apollo/server';// Note: Import from @apollo/server-express
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schemas/index.js';
import { authenticateToken } from './utils/auth.js';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const startApolloServer = async () => {
  await server.start();
  await db();

  const PORT = process.env.PORT||3001;
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server as any,
    {
      context: authenticateToken as any
    }
  ));
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  //
  console.log("Current directory:", __dirname);
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../Client/dist')));

    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, '../../Client/dist/index.html'));
});
  }
  console.log("static"+path.join(__dirname, '../../client/dist/index.html'));
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

startApolloServer();
