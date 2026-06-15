"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setState("success");
      setMessage(data.message || "Thanks. Your message was received.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please email support@nverly.com.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-800">Name</span>
          <input
            required
            name="name"
            minLength={2}
            className="h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-800">Email</span>
          <input
            required
            name="email"
            type="email"
            className="h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2">
        <span className="text-sm font-medium text-slate-800">Subject</span>
        <input
          required
          name="subject"
          minLength={3}
          className="h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
          placeholder="Partnership, provider access, or support"
        />
      </label>

      <label className="mt-4 block space-y-2">
        <span className="text-sm font-medium text-slate-800">Message</span>
        <textarea
          required
          name="message"
          minLength={10}
          rows={5}
          className="w-full resize-y rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
          placeholder="Tell us how we can help."
        />
      </label>

      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {state === "loading" ? "Sending..." : "Send message"}
      </button>

      {message ? (
        <p
          className={`mt-4 rounded-md px-4 py-3 text-sm ${
            state === "success"
              ? "bg-teal-50 text-teal-800"
              : "bg-rose-50 text-rose-800"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
