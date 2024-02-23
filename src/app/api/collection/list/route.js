import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  const list = await kv.lrange('ann-collection-list', 0, -1);

  return NextResponse.json(
    list,
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
