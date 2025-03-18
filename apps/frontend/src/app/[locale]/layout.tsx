import "@repo/cric-ui/index.css";
import "@repo/design-system/styles.css";

// eslint-disable-next-line camelcase
import { Schibsted_Grotesk } from "next/font/google";
import { ServerAppProvider, ClientAppProvider } from "~/providers";

const schibstedGtostesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted-grotesk",
});

export const metadata = {
  title: "cric-monex-root-template",
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
    <html className={schibstedGtostesk.variable} lang={locale}>
      <body>
        <ServerAppProvider>
          <ClientAppProvider>{children}</ClientAppProvider>
        </ServerAppProvider>
      </body>
    </html>
  );
}
