"use client";

import { useLocale } from "next-intl";
import { Button } from "@repo/cric-ui/components/shadcn/ui/button";
import { toast } from "sonner";
import { Link } from "~/lib/next-intl/navigation";
import { useRandomUserOperations } from "~/operations/random-user/use-random-user-operations";
import type { Locale } from "~/lib/next-intl";
import CricLogo from "~/assets/logo/cric-logo.svg"; // adjust path as needed
import { mockRandomUser } from "~/services/random-user/mock-random-user";
import type { User } from "~/services/random-user/type";
// import Image from "next/image";

export default function Store(): JSX.Element {
  const locale = useLocale() as Locale;
  const {
    randomUserData,
    fetchMoreRandomUser,
    isGetRandomUserFetching,
    resetRandomUserData,
  } = useRandomUserOperations().getRandomUserInfinitely();

  const { onCreateRandomUser } = useRandomUserOperations().createRandomUser();

  /* Example of extended onSuccess, onError, onSettled */
  const handleCreateRandomUser = (data: User) => {
    onCreateRandomUser(data, {
      onSuccess: () => toast("Mutation Success (onCreateRandomUser)"),
    });
  };

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
      <div className="flex gap-4">
        <Button
          className="no-underline hover:underline"
          disabled={isGetRandomUserFetching}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => fetchMoreRandomUser()}
          type="button"
        >
          {isGetRandomUserFetching
            ? "Loading..."
            : "Test fetching random users"}
        </Button>
        {isGetRandomUserFetching ? (
          <Button
            className="no-underline hover:underline"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => resetRandomUserData()}
            type="button"
          >
            Cancel
          </Button>
        ) : null}
        <Button
          className="no-underline hover:underline"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => resetRandomUserData()}
          type="button"
        >
          Reset
        </Button>
        <Button
          className="bg-secondary no-underline hover:underline"
          onClick={() => handleCreateRandomUser(mockRandomUser)}
          type="button"
        >
          Imitate mutation success
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {randomUserData?.map((user) => (
          <div className="rounded-lg border p-4" key={user.login.uuid}>
            <p>
              {user.name.first} {user.name.last}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
