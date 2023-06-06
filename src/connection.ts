import dotenv from "dotenv";
import { Redis as Server } from "ioredis";

dotenv.config();

let redis: Server;

// @ts-ignore
if (typeof redis === "undefined") {
  redis = new Server(
    `redis${
      process.env.REDIS_SSL && JSON.parse(process.env.REDIS_SSL) ? "s" : ""
    }://${
      process.env.REDIS_PASSWORD ? ":" + process.env.REDIS_PASSWORD + "@" : ""
    }${process.env.REDIS_HOST || "127.0.0.1"}:${
      process.env.REDIS_PORT || "6379"
    }`
  );
}

export default redis;
