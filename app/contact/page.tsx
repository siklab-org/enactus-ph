import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a campus team, partner with us, or join the network. Get in touch with Enactus Philippines.",
};

const channels = [
  { k: "Students", v: "Form a team on your campus or join an existing one.", e: "students@enactus.ph" },
  { k: "Universities", v: "Charter your university into the national network.", e: "academic@enactus.ph" },
  { k: "Partners", v: "Sponsor programs, judge competitions, or run an industry challenge.", e: "partners@enactus.ph" },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="bg-primary px-2 italic">build</span> something.</>}
        subtitle="Tell us what you're working on. We'll route you to the right team within the week."
      />
      <section className="border-b border-border/60">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:grid-cols-3">
          {channels.map((c) => (
            <div key={c.k} className="border-t border-foreground/20 pt-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{c.k}</div>
              <p className="mt-3 text-lg text-foreground/90">{c.v}</p>
              <a href={`mailto:${c.e}`} className="mt-6 inline-block font-mono text-sm text-foreground hover:text-primary">
                {c.e} →
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="border-b border-border/60 bg-secondary text-secondary-foreground">
        <div className="mx-auto w-full max-w-3xl px-6 py-24">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] opacity-60">· General inquiries</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Drop us a line</h2>
          <form className="mt-10 grid gap-5">
            <input
              type="text"
              placeholder="Full name"
              className="h-12 rounded-md border border-white/15 bg-white/5 px-4 text-sm placeholder:opacity-60 focus:border-primary focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="h-12 rounded-md border border-white/15 bg-white/5 px-4 text-sm placeholder:opacity-60 focus:border-primary focus:outline-none"
            />
            <textarea
              placeholder="What can we help with?"
              rows={5}
              className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder:opacity-60 focus:border-primary focus:outline-none"
            />
            <button
              type="button"
              className="inline-flex h-12 w-fit items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}