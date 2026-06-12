"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type Adviser = {
  name: string;
  role: string;
  organization: string;
  image?: string;
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
    <div className="flex aspect-[4/5] w-full items-center justify-center rounded-xl bg-muted">
      <span className="font-display text-4xl font-semibold text-muted-foreground/40">
        {initials}
      </span>
    </div>
  );
}

function CardFront({ person }: { person: Adviser }) {
  return (
    <>
      {person.image ? (
        <Image
          src={person.image}
          alt={person.name}
          width={400}
          height={400}
          className="aspect-[4/5] w-full rounded-xl object-cover"
        />
      ) : (
        <PlaceholderAvatar name={person.name} />
      )}
      <h3 className="mt-5 text-lg font-semibold">{person.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
      <p className="mt-1 text-sm text-muted-foreground/60">{person.organization}</p>
    </>
  );
}

export function AdviserCard({ person }: { person: Adviser }) {
  if (!person.bio) {
    return (
      <div className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-background p-8">
        <CardFront person={person} />
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/60 bg-background p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_oklch(0_0_0/0.12)]">
          <CardFront person={person} />
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-background/60 opacity-0 backdrop-blur-sm transition-all duration-500 ease-out group-hover:opacity-100">
            <span className="font-semibold text-foreground">See more</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-sm:max-w-[calc(100vw-2rem)]">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="shrink-0 md:w-64">
            {person.image ? (
              <Image
                src={person.image}
                alt={person.name}
                width={400}
                height={500}
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            ) : (
              <PlaceholderAvatar name={person.name} />
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-2xl font-bold">{person.name}</h2>
              <p className="mt-1 text-muted-foreground">{person.role}</p>
              <p className="text-sm text-muted-foreground/60">{person.organization}</p>
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
