import { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.14),transparent_34%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8">{children}</section>
    </main>
  );
}
