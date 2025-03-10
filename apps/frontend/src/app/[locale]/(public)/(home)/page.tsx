"use client";

import { useLocale } from "next-intl";
import type { Locale } from "~/lib/next-intl";
import { Link } from "~/lib/next-intl/navigation";
import CricLogo from "~/assets/logo/cric-logo.svg"; // adjust path as needed
// import Image from "next/image";

export default function Store(): JSX.Element {
  const locale = useLocale() as Locale;

  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <CricLogo className="relative h-16 w-16" />
      {/* Example of using next/image without manually setting width and height
      <div className="relative w-16 h-16">
      <Image
        src="/assets/logo/cric-logo.svg"
        alt="Description of image"
        fill
        className="object-cover rounded-lg"
      />
    </div> */}
      <h1 className="m-0 text-4xl font-bold">
        Criclabs <br />
        <span className="from-primary to-secondary mt-4 inline-block bg-gradient-to-r bg-clip-text text-3xl text-transparent">
          {`cric-monex-root-template`
            .split("-")
            .map((word) => word.toUpperCase())
            .join(" ")}{" "}
          ({locale.toUpperCase()})
        </span>
      </h1>
      <p className="text-muted-light font-medium">
        Built With{" "}
        <Link
          className="text-secondary no-underline hover:underline"
          href="https://turbo.build/repo"
          target="_blank"
        >
          Turborepo
        </Link>
        {" & "}
        <Link
          className="text-secondary no-underline hover:underline"
          href="https://nextjs.org/"
          target="_blank"
        >
          Next.js
        </Link>
      </p>
    </div>
  );
}
