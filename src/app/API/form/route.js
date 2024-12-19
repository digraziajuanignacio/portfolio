import connectDB from "@/app/Lib/mongodb";
import Contact from "@/app/Models/form";
import { NextResponse } from "next/server";
import mongoose from "mongoose";


export async function POST(req) {
  const { fullname, email, aboutMe } =
    await req.json();

  try {
    await connectDB();
    await Contact.create({
      fullname,
      email,
      aboutMe
    });

    return NextResponse.json({
      msg: ["Tu información fue enviada correctamente."],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({
        msg: ["La información no se ha podido enviar correctamente."],
      });
      
    }
  }
}
