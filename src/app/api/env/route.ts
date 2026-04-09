import { NextResponse } from "next/server";

export async function GET() {
  console.log("SECRET_API_KEY:", process.env.SECRET_API_KEY);
  console.log("SECRET_SOME_KEY:", process.env.SECRET_SOME_KEY);

  return NextResponse.json({
    secretApi: process.env.SECRET_API_KEY,
    secretSome: process.env.SECRET_SOME_KEY,
  });
}
