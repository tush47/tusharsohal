import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
export async function POST() {
  console.log("Revalidation triggered at:", Date.now());
  revalidateTag("prismic");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
