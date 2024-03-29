import { NextResponse } from 'next/server';
import axios from 'axios'

// non-use
export async function PUT(request) {
  console.log(request.body)
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  // ⚠️ The below code is for App Router Route Handlers only
  const blob = await put(filename, request.body, {
    access: 'public',
  });

  // Here's the code for Pages API Routes:
  // const blob = await put(filename, request, {
  //   access: 'public',
  // });

  return NextResponse.json(blob);
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
