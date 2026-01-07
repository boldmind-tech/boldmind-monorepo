import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { supabaseToken } = await req.json();

    // Call API Gateway to sync user
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sync`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: supabaseToken }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Auth sync error:', error);
    return NextResponse.json(
      { error: 'Failed to sync authentication' },
      { status: 500 }
    );
  }
}