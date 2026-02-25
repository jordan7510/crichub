import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

export async function POST(req: Request) {

    const WEBHOOK_SECRET = process.env.WEBHOOK_SIGNING_SECRET;
    if (!WEBHOOK_SECRET) {
        throw new Error("Please add Web hook siging secret in .env")
    }

    const headerPlayload = headers();
    const svix_id = (await headerPlayload).get("svix-id")
    const svix_timestamp = (await headerPlayload).get("svix-timestamp")
    const svix_signature = (await headerPlayload).get("svix-signature")

    if (!svix_id || !svix_signature || !svix_timestamp) {
        return new Error("Error occured, no svix headers.")
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
        return new Response("Error occures", { status: 400 })
    }

    // const { id } = evt.data
    const eventType = evt.type

    if (eventType === "user.created") {
        try {
            const { email_addresses, primary_email_address_id } = evt.data
            // const primaryEmail = email_addresses.find((email) => email.id === primary_email_address_id)

            // if (!primaryEmail) {
            //     return new Response("No primary email found", { status: 400 })
            // }

            // Create a new user in DB
            const newUser = {
                id: evt.data.id,
                email: email_addresses,
            }
            console.log("New user created", newUser)

        } catch (error) {
            console.log("Error creating user in DB", error);

            return new Response("Error creating user in DB", { status: 400 })
        }

    }


    if (eventType === "session.created") {
        try {
            const sessionData =  evt.data
            console.log("Session created", sessionData)
        } catch (error) {
            console.log("Error saving session in DB", error);
            return new Response("Error saving session in DB", { status: 400 })
        }

    }


    return new Response("Webhook received successfully", { status: 200 })
}