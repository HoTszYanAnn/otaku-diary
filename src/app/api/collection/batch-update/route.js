import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import axios from 'axios';
import { COLLECTION_KEY } from '../const';

export async function POST(request) {
  try {

    const data = await request.json();
    const batchUpdateList = data?.batchUpdateList
    // LSET update item by list
    // LREM remove item by elements

    // ["SET", "userEmail", "example@example.com", "EX", 100],
    // ["GET", "userEmail"]
    console.log({ batchUpdateList })
    const kvCmdList = batchUpdateList?.map((item) => {
      const action = item?.action
      const index = item?.index
      delete item.action
      delete item.index
      if (action === 'DELETE') {
        return ['LREM', COLLECTION_KEY, '1', JSON.stringify(item)]
      } else if (action === 'UPDATE_QUANTITY') {
        return ['LSET', COLLECTION_KEY, index, JSON.stringify(item)]
      }
    })
    kvCmdList.sort((a, b) => (a[0] === 'LREM' && b[0] === 'LSET') ? 1 : -1)
    console.log({ kvCmdList })
    const res = await axios.post(`${process.env.KV_REST_API_URL}/pipeline`, kvCmdList, {
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      },
    })
    const errorList = []
    const resData = res?.data
    console.log(resData)
    kvCmdList.map((cmd, index) => {
      const result = resData?.[index]?.result
      if (cmd[0] === 'LREM') {
        if (result !== 1) errorList.push(`LREM ERROR in ${index}: ${result}`)
      } else if (cmd[0] === 'LSET') {
        if (result !== 'OK') errorList.push(`LSET ERROR in ${index}: ${result}`)
      }
    })
    if (errorList.length !== 0) throw Error(JSON.stringify(errorList))
    return NextResponse.json(
      { ok: true, message: 'success' },
      {
        status: 200
      }
    );
  } catch (e) {
    return NextResponse.json(
      { ok: false, message: `SERVER ERROR: ${e}` },
      {
        status: 500
      }
    );
  }
}

export async function GET(request) {
  console.log(request)

  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 405
    }
  );
}
// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
