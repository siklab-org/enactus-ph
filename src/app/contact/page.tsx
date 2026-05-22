import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a campus team, partner with us, or join the network. Get in touch with Enactus Philippines.",
};

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const socials = [
  { icon: Mail, label: "Email", href: "mailto:EnactusPH@enactus.org", value: "EnactusPH@enactus.org" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/official-enactus-philippines/", value: "Official Enactus Philippines" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589749435839/", value: "Enactus Philippines" },
] as const;

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s <span className="bg-primary px-2 italic">build</span> something.</>}
        subtitle="Tell us what you&apos;re working on. We&apos;ll route you to the right team within the week."
      />
      {/* ─── SOCIAL CARDS ─── */}
      <section className="border-b border-border/60">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                · Get in touch
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                One email, whole team.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Reach every department through a single address. We&apos;ll route your message to the right people.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {socials.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noreferrer"}
                  className="group flex flex-col items-center gap-4 rounded-2xl border border-border/60 p-8 text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_8px_30px_oklch(0_0_0/0.12)] animate-slide-in-right"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-secondary-foreground/60">
                      {s.label}
                    </div>
                    <div className="mt-1 text-sm font-medium">{s.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
      {/* ─── CONTACT FORM ─── */}
      <section className="border-b border-border/60 bg-secondary text-secondary-foreground">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-3xl px-6 py-24">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] opacity-60">· General inquiries</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Drop us a line</h2>
            <form
              action="mailto:EnactusPH@enactus.org"
              method="POST"
              encType="text/plain"
              className="mt-10 grid gap-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="h-12 rounded-md border border-white/15 bg-white/5 px-4 text-sm placeholder:opacity-60 focus:border-primary focus:outline-none transition-all duration-200 focus:border-white/40 focus:bg-white/10"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="h-12 rounded-md border border-white/15 bg-white/5 px-4 text-sm placeholder:opacity-60 focus:border-primary focus:outline-none transition-all duration-200 focus:border-white/40 focus:bg-white/10"
              />
              <textarea
                name="message"
                placeholder="What can we help with?"
                rows={5}
                className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder:opacity-60 focus:border-primary focus:outline-none transition-all duration-200 focus:border-white/40 focus:bg-white/10"
              />
              <button
                type="submit"
                className="inline-flex h-12 w-fit items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_4px_20px_oklch(0_0_0/0.2)]"
              >
                Send message
              </button>
            </form>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}