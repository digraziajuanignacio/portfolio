import { NextResponse } from 'next/server';
import connectDB from '@/app/Lib/mongodb'; 

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ status: 'Alive', date: new Date().toISOString() }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 'Error', error: error.message }, { status: 500 });
  }
}