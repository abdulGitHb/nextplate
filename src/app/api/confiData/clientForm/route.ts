import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function POST(req:Request) {

    try {
        const body = await req.json();
        const {firstName, lastName, email, jobDescription, message} = body;

        const contactForm = await prismadb.clientContact.create({
            data:{
                firstName,
                lastName,
                email,
                jobDescription,
                message
            }
        });

        console.log('Seeded database with 1 client-contact form');

        return  NextResponse.json(contactForm);

    } catch (error) {
        console.log('[CLIENT_CONTACT_POST]', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}