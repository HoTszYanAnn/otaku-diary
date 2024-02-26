import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { COLLECTION_KEY } from '../const';

export async function GET(req) {
  const list = await kv.lrange(COLLECTION_KEY, 0, -1);
  const tid = req.nextUrl.searchParams.get("tid")
  return NextResponse.json(
    { list, tid },
    {
      status: 200
    }
  );
}
// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
export const fetchCache = 'force-no-store'