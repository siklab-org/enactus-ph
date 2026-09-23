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

export type Fellow = {
  name: string;
  position: string;
  institution: string;
  photo?: string;
  bio: string;
};

function CardMedia({ person }: { person: Fellow }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-muted">
      <Image
        src="/boa/BG.png"
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
      <Image
        src={person.photo ?? "/fellows-2026/avatar-placeholder.png"}
        alt={person.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className={
          person.photo
            ? "object-cover object-top"
            : "object-cover"
        }
      />
    </div>
  );
}

function CardFront({ person }: { person: Fellow }) {
  return (
    <>
      <CardMedia person={person} />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{person.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{person.position}</p>
        <p className="mt-1 text-sm text-muted-foreground/60">{person.institution}</p>
      </div>
    </>
  );
}

export function FellowCard({ person }: { person: Fellow }) {
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
                {person.position}
              </DialogDescription>
              <DialogDescription className="text-left text-sm">
                {person.institution}
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