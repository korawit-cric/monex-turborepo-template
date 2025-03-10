"use client";

import { Toaster } from "@repo/cric-ui/components/shadcn/ui/sonner";
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from "sonner";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { ReactNode } from "react";
import { useState } from "react";

export const ClientAppProvider = ({ children }: { children: ReactNode }) => {
  /* Example of handling global onSuccess, onError, onSettled */
  const queryCache = new QueryCache({
    onError: (error) => {
      toast(`Query error: ${error.message}`, {
        duration: 3000,
      });
    },
    onSuccess: () => {
      toast("Query success", {
        duration: 3000,
      });
    },
  });

  const mutationCache = new MutationCache({
    onError: (error) => {
      toast(`Mutation error: ${error.message}`, {
        duration: 3000,
      });
    },
    onSuccess: () => {
      toast("Mutation success (Global)", {
        duration: 3000,
      });
    },
  });
  // eslint-disable-next-line react/hook-use-state
  const [queryClient] = useState(
    () => new QueryClient({ mutationCache, queryCache }),
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster />
    </>
  );
};
