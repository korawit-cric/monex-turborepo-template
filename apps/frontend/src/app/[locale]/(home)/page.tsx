'use client';

import { useLocale } from "next-intl";
import { Locale } from "~/lib/next-intl";

export default function HomePage() {

  const locale = useLocale() as Locale

  return (
      <main className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
            {`cric-monex-root-template`.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} ({locale.toUpperCase()})
        </h1>
      </main>
  );
}
