import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "../../infrastructure/supabase/client";

export async function middleware(req: NextRequest) {
  const { data } = await getSupabaseClient().auth.getUser();

  if (!data.user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
