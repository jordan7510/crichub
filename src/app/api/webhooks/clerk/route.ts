import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { User } from "@/Models/User";
import dbConnect from "@/lib/dbConnect";

export async function POST(req: Request) {
    await dbConnect();
    const WEBHOOK_SECRET = process.env.WEBHOOK_SIGNING_SECRET;
    if (!WEBHOOK_SECRET) {
        return NextResponse.json(
            { error: "Webhook signing secret missing" },
            { status: 500 }
        );
    }

    const headerPlayload = headers();
    const svix_id = (await headerPlayload).get("svix-id")
    const svix_timestamp = (await headerPlayload).get("svix-timestamp")
    const svix_signature = (await headerPlayload).get("svix-signature")

    if (!svix_id || !svix_signature || !svix_timestamp) {
        return NextResponse.json(
            { error: "Missing svix headers" },
            { status: 400 }
        );
    }

    const payload = await req.json()
    const body = JSON.stringify(payload)
    const wh = new Webhook(WEBHOOK_SECRET);
    let evt: WebhookEvent;

    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error("Error verifying webhooks.", err)
        return NextResponse.json(
            { error: "Invalid webhook signature" },
            { status: 400 }
        );
    }

    // const { id } = evt.data
    const eventType = evt.type
    if (eventType === "user.created") {

        try {
            const user = evt.data as {
                primary_email_address_id?: string | null,
                email_addresses?: Array<{ id: string, email_address: string }>,
                primary_phone_number_id?: string | null,
                phone_numbers?: Array<{ id: string, phone_number: string }>
            }
            console.log("clerk user data", user);
            const primaryEmail = user.email_addresses?.find((e) => e.id === user.primary_email_address_id)
            const primaryPhone = user.phone_numbers?.find((p) => p.id === user.primary_phone_number_id)
            const firstName = evt.data.first_name ?? ""
            const lastName = evt.data.last_name ?? ""

            // Create a new user in DB
            const newUser = new User({
                clerkUserId: evt.data.id,
                name: `${firstName} ${lastName}`.trim() || undefined,
                email: primaryEmail?.email_address,
                phone: primaryPhone?.phone_number,
                lastSignInAt: evt.data.last_sign_in_at ? new Date(evt.data.last_sign_in_at) : undefined,
            })
            console.log("new created user", newUser);

            const savedUser = await newUser.save()
            console.log("user created in DB", savedUser);
            return NextResponse.json({ success: true, savedUser, message: "Signup success" }, { status: 201 })

        } catch (error) {
            console.log("Error creating user in DB", error);
            return new Response("Error creating user in DB", { status: 400 })
        }
    }


    return new Response("Webhook received successfully", { status: 200 })
}