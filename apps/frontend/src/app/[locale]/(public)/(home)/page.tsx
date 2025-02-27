'use client';

import { useLocale } from "next-intl";
import { Locale } from "~/lib/next-intl";
import { Link } from "~/lib/next-intl/navigation";
import  CricLogo from "~/assets/logo/cric-logo.svg"; // adjust path as needed
// import Image from "next/image";

export default function Store(): JSX.Element {
  const locale = useLocale() as Locale

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 text-center">
      <CricLogo className="relative w-16 h-16" />
      {/* <div className="relative w-16 h-16">
      <Image
        src="/assets/logo/cric-logo.svg"
        alt="Description of image"
        fill
        className="object-cover rounded-lg"
      />
    </div> */}
      <h1 className="text-4xl font-bold m-0">
        Criclabs <br />
        <span className="text-3xl inline-block bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
        {`cric-monex-root-template`.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} ({locale.toUpperCase()}) 
        </span>
      </h1>
      <p className="text-gray-400 font-medium">
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
    </div>
  );
}
