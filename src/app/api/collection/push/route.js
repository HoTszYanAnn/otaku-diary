import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { COLLECTION_KEY } from '../const';

export async function POST(request) {
  const data = await request.json();
  await kv.lpush(COLLECTION_KEY, JSON.stringify(data));

  return NextResponse.json(
    {},
    {
      status: 200
    }
  );
}
