import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST(request) {
  const data = await request.json();
  console.log(data)
  await kv.lpush('ann-collection-list', data);

  return NextResponse.json(
    {},
    {
      status: 200
    }
  );
}
