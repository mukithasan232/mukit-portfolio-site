"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitLeadMagnet(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const budget = formData.get("budget") as string;
    const location = formData.get("location") as string;
    const needs = formData.get("needs") as string;

    if (!name || !email || !budget || !location || !needs) {
        return { success: false, message: "All fields are required." };
    }

    try {
        const data = await resend.emails.send({
            from: "CoderNest Portfolio <onboarding@resend.dev>",
            to: "codernestwebsolution@gmail.com",
            replyTo: email,
            subject: "[New Lead] Strategy Call Request",
            html: `
                <h2>New Strategy Call Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Needs:</strong> ${needs}</p>
                <p><strong>Budget:</strong> ${budget}</p>
                <p><strong>Location:</strong> ${location}</p>
            `,
        });

        if (data.error) {
            console.error("Resend Error:", data.error);
            return { success: false, message: "Failed to send email." };
        }

        return { success: true, message: "Thank you! I will be in touch shortly." };
    } catch (error) {
        console.error("Server Error:", error);
        return { success: false, message: "Something went wrong." };
    }
}
