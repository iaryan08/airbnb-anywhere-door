import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const noCacheHeaders = {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    };

    // 1. Try Vercel's direct geolocation headers first (most reliable when deployed on Vercel)
    const vercelCity = request.headers.get("x-vercel-ip-city");
    const vercelCountry = request.headers.get("x-vercel-ip-country");
    
    if (vercelCity) {
      const countryNames: Record<string, string> = {
        IN: "India",
        CH: "Switzerland",
        US: "United States",
        GB: "United Kingdom",
        DE: "Germany",
        FR: "France",
        IT: "Italy",
        ES: "Spain",
        NL: "Netherlands",
        AE: "United Arab Emirates",
        SG: "Singapore",
        AU: "Australia",
        CA: "Canada",
        JP: "Japan",
        CN: "China",
        TH: "Thailand",
        MY: "Malaysia",
      };
      const countryCode = vercelCountry || "US";
      return NextResponse.json({
        city: decodeURIComponent(vercelCity),
        countryCode: countryCode,
        country: countryNames[countryCode] ?? countryCode,
        success: true
      }, {
        headers: noCacheHeaders
      });
    }

    // 2. Fallback to ip-api.com using forwarding headers for local testing
    let ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "";
    if (ip.includes(",")) {
      ip = ip.split(",")[0].trim();
    }

    const url = ip && ip !== "127.0.0.1" && ip !== "::1" && ip !== "localhost"
      ? `http://ip-api.com/json/${ip}`
      : "http://ip-api.com/json/";

    const res = await fetch(url, {
      cache: "no-store"
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch geolocation");
    }
    const data = await res.json();
    return NextResponse.json(data, {
      headers: noCacheHeaders
    });
  } catch (error) {
    // Return standard fallback rather than erroring out
    return NextResponse.json({
      city: "New Delhi",
      countryCode: "IN",
      country: "India",
      success: false
    }, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      }
    });
  }
}
