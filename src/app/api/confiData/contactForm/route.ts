import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function POST(req:Request) {

    try {
        const body = await req.json();
        const {firstName, lastName, email, message} = body;

        const contactForm = await prismadb.contact.create({
            data:{
                firstName,
                lastName,
                email,
                message
            }
        });

        console.log('Seeded database with 1 contact form');

        return  NextResponse.json(contactForm);

    } catch (error) {
        console.log('[CONTACT_FORM_POST]', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
    

}