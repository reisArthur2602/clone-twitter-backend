import "dotenv/config";

import express from "express";
import cors from "cors";

import routes from "./routes";

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

const PORT = process.env.PORT as string | 3333;

server.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT} 🚀`);
});
