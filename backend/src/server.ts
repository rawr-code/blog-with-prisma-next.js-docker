import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { createContext } from "./context";

const port = 4000;

new ApolloServer({ schema, context: createContext }).listen(
  {
    port,
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  () => console.log(`🚀 Prisma is ready at: http://localhost:${port}`)
);
