import { NextResponse } from "next/server";
import EmailTemplate from "@/components/contactUs/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, mobile_number, description } = body;

    const { data, error } = await resend.emails.send({
      from: "Enquiry - Manfree <onboarding@resend.dev>",
      to: [process.env.NEXT_RESEND_EMAIL],
      subject: "Website enquiry form ",
      react: EmailTemplate({
        first_name,
        last_name,
        email,
        mobile_number,
        description,
      }),
    });

    if (error) {
      return new Response(error.message, { status: error.statusCode });
    }

    return NextResponse.json(data);
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
