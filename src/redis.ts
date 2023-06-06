import { Callback } from "ioredis";
import redis from "./connection";

export const set = async (
  key: string,
  value: string | number,
  ex: number = 60
) => await redis.set(key, value, "EX", ex);
export const get = async (key: string) => await redis.get(key);
export const del = async (key: string) => await redis.del(key);
export const flushadb = async () => await redis.flushdb();
export const flushall = async () => await redis.flushall();
export const random = async () => await redis.randomkey();
export const sub = async (channel: string) => await redis.subscribe(channel);
export const psub = async (channel: string) => await redis.psubscribe(channel);
export const publish = async (channel: string, message: string) =>
  await redis.publish(channel, message);
export const subscribe = async (channel: string, cb: Callback<unknown>) =>
  await redis.subscribe(channel, cb);
export const psubscribe = async (channel: string, cb: Callback<unknown>) =>
  await redis.psubscribe(channel, cb);
export const ping = async () => await redis.ping();
