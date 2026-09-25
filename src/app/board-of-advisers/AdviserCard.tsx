"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type Adviser = {
  name: string;
  role: string;
  organization: string;
  portrait?: string;
  logo?: string;
  bio?: string;
};

function PlaceholderAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-full w-full items-center justify-center bg-muted">
      <span className="font-display text-4xl font-semibold text-muted-foreground/40">
        {initials}
      </span>
    </div>
  );
}

function CardMedia({ person }: { person: Adviser }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-muted">
      <Image
        src="/boa/BG.png"
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
      {person.portrait ? (
        <Image
          src={person.portrait}
          alt={person.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain object-bottom"
        />
      ) : (
        <div className="absolute inset-0">
          <PlaceholderAvatar name={person.name} />
        </div>
      )}
    </div>
  );
}

function CardFront({ person }: { person: Adviser }) {
  return (
    <>
      <CardMedia person={person} />
      <div className="flex flex-1 flex-col justify-center gap-1.5 p-6">
        <h3 className="text-base font-semibold leading-snug">{person.name}</h3>
        <p className="text-xs text-muted-foreground">{person.role}</p>
        <div className="mt-1.5 flex items-center gap-3">
          {person.logo && (
            <span className="inline-flex h-10 w-16 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/40 px-2">
              <Image
                src={person.logo}
                alt={person.organization}
                width={120}
                height={48}
                className="h-full w-full object-contain"
              />
            </span>
          )}
          <p className="flex-1 text-xs font-medium leading-snug text-muted-foreground/60">
            {person.organization}
          </p>
        </div>
      </div>
    </>
  );
}

export function AdviserCard({ person }: { person: Adviser }) {
  if (!person.bio) {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background">
        <CardFront person={person} />
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_oklch(0_0_0/0.12)]">
          <CardFront person={person} />
          <div className="absolute right-3 top-3 flex items-center rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground opacity-0 shadow-sm transition-opacity duration-200 ease-out group-hover:opacity-100">
            See more
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-sm:max-w-[calc(100vw-2rem)]">
        <div className="flex flex-col gap-6 md:flex-row">
            <div className="shrink-0 md:w-64">
            <div className="overflow-hidden rounded-xl">
              <CardMedia person={person} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <DialogTitle className="text-left text-2xl font-bold">
                {person.name}
              </DialogTitle>
              <DialogDescription className="text-left">
                {person.role}
              </DialogDescription>
              <DialogDescription className="text-left text-sm">
                {person.organization}
              </DialogDescription>
            </div>
            <div className="h-px bg-border" />
            <ScrollArea className="max-h-40 sm:max-h-48">
              <p className="text-sm leading-relaxed text-muted-foreground/90">
                {person.bio}
              </p>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
