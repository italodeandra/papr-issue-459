import { connectDb as connect } from "@italodeandra/next/db";

export default async function connectDb() {
  await connect();
}
