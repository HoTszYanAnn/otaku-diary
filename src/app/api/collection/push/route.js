import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST(request) {

  await kv.lpush('ann-badge-list', {
    "id": "tokiya-starwish",
    "image": "tokiya-starwish-l68RVG0xocnoOJJiQs9O0Paex6W82v.jpeg",
    "count": 20,
    "displayName": "Star Wish"
  });

  return NextResponse.ok();
}
