import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image src="/enactus-logo.svg" alt="Enactus" width={73} height={32} className="h-8 w-auto brightness-0 invert" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] opacity-70">
              / Philippines
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed opacity-75">
            A national network of student, academic and business leaders using
            entrepreneurial action to build a more sustainable Philippines.
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] opacity-50">
            Manila · Cebu · Davao · Iloilo
          </p>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-60">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/who-we-are" className="opacity-80 hover:opacity-100">Who We Are</Link></li>
            <li><Link href="/what-we-do" className="opacity-80 hover:opacity-100">What We Do</Link></li>
            <li><Link href="/impact" className="opacity-80 hover:opacity-100">Our Impact</Link></li>
            <li><Link href="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-60">
            Network
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://enactus.org" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">Enactus Global</a></li>
            <li><a href="https://siklab.org.ph/" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">Siklab — National Expo Organizers</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.2em] opacity-60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Enactus Philippines</span>
          <span>Entrepreneurial · Action · Us</span>
        </div>
      </div>
    </footer>
  );
}
