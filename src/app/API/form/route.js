import connectDB from "@/app/Lib/mongodb";
import Contact from "@/app/Models/form";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer"; 

export async function POST(req) {
  const { fullname, email, aboutMe } = await req.json();

  try {
    await connectDB();
    
    await Contact.create({
      fullname,
      email,
      aboutMe
    });


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'tucorreopersonal@gmail.com', 
        subject: `Nuevo Lead en Portfolio: ${fullname}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h2 style="color: #333;">¡Tienes un nuevo contacto!</h2>
            <p><strong>Nombre:</strong> ${fullname}</p>
            <p><strong>Email del interesado:</strong> ${email}</p>
            <p><strong>Mensaje / Sobre mí:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #0070f3;">
              ${aboutMe}
            </blockquote>
          </div>
        `,
      });
      console.log("Correo de notificación enviado con éxito.");
    } catch (emailError) {
      console.error("Error enviando el correo, pero el registro se guardó en DB:", emailError);
      
    }


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
      console.error(error); 
      return NextResponse.json({
        msg: ["La información no se ha podido enviar correctamente."],
      });
    }
  }
}