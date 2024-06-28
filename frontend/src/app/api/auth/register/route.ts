import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await axios.post('http://localhost:5000/api/auth/register', body);
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json({ message: error.response?.data.message || 'An error occurred' }, { status: error.response?.status || 500 });
  }
}
