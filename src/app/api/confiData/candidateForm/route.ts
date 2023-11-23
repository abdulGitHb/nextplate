import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function POST(req:Request) {

    try {
        const body = await req.json();
        const {firstName, lastName, email, resume, message} = body;

        const contactForm = await prismadb.candidateContact.create({
            data:{
                firstName,
                lastName,
                email,
                resume,
                message
            }
        });

        console.log('Seeded database with 1 candidate-contact form');

        return  NextResponse.json(contactForm);

    } catch (error) {
        console.log('[CANDIDATE_CONTACT_POST]', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
    

}