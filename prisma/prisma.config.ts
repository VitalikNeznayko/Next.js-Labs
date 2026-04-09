import dotenv from "dotenv";

dotenv.config();

export const config = {
  adapter: "postgresql",
  url: process.env.DATABASE_URL 
};