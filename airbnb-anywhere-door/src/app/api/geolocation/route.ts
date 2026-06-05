import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://ip-api.com/json/", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!res.ok) {
      throw new Error("Failed to fetch geolocation");
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch geolocation data" }, { status: 500 });
  }
}
