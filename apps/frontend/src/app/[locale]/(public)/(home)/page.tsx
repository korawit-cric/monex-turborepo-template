"use client";

import { useLocale } from "next-intl";
import { Locale } from "~/lib/next-intl";
import { Link } from "~/lib/next-intl/navigation";
import CricLogo from "~/assets/logo/cric-logo.svg"; // adjust path as needed
import { Button } from "@repo/cric-ui/components/shadcn/ui/button";
// import Image from "next/image";

export default function Store(): JSX.Element {
  const locale = useLocale() as Locale;

  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <CricLogo className="relative h-16 w-16" />
      {/* <div className="relative w-16 h-16">
      <Image
        src="/assets/logo/cric-logo.svg"
        alt="Description of image"
        fill
        className="object-cover rounded-lg"
      />
    </div> */}
      <h1 className="m-0 text-4xl font-bold">
        Criclabs <br />
        <span className="inline-block bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-3xl text-transparent">
          {`cric-monex-root-template`
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}{" "}
          ({locale.toUpperCase()})
        </span>
      </h1>
      <p className="font-medium text-gray-400">
        Built With{" "}
        <Link
          href="https://turbo.build/repo"
          target="_blank"
          className="text-blue-500 no-underline hover:underline"
        >
          Turborepo
        </Link>
        {" & "}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          className="text-blue-500 no-underline hover:underline"
        >
          Next.js
        </Link>
      </p>
      <Button className="bg-primary">Asaka</Button>
    </div>
  );
}
