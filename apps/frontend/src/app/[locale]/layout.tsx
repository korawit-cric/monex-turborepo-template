import "@repo/cric-ui/index.css";
import "@repo/design-system/styles.css";

// eslint-disable-next-line camelcase
import { Schibsted_Grotesk } from "next/font/google";
import { cn } from "@repo/cric-ui/lib/utils";
import { ServerAppProvider, ClientAppProvider } from "~/providers";

const schibstedGtostesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata = {
  title: "monex-turborepo-template",
  description:
    "A boilerplate template for building a monorepo architecture with Turborepo, Next.js, Express and cric-packages.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
  params: paramsPromise,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await paramsPromise;

  return (
    <html
      className={cn(schibstedGtostesk.variable, "font-primary")}
      lang={locale}
    >
      <body>
        <ServerAppProvider>
          <ClientAppProvider>{children}</ClientAppProvider>
        </ServerAppProvider>
      </body>
    </html>
  );
}
