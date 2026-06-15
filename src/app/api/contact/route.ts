import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const company = clean(payload.company);
  if (company) {
    return NextResponse.json({ message: "Message received." });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const subject = clean(payload.subject);
  const message = clean(payload.message);

  if (name.length < 2) {
    return NextResponse.json({ message: "Please enter your name." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (subject.length < 3) {
    return NextResponse.json({ message: "Please enter a subject." }, { status: 400 });
  }

  if (message.length < 10) {
    return NextResponse.json(
      { message: "Please enter a message with at least 10 characters." },
      { status: 400 },
    );
  }

  const contactRequest = {
    name,
    email,
    subject,
    message,
    receivedAt: new Date().toISOString(),
  };

  if (process.env.CONTACT_WEBHOOK_URL) {
    const response = await fetch(process.env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactRequest),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "We could not send your message. Please email support@nverly.com." },
        { status: 502 },
      );
    }
  } else {
    console.info("Nverly contact request", contactRequest);
  }

  return NextResponse.json({
    message: "Thanks. Your message was received. We will reply by email.",
  });
}
