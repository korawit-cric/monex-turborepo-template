import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import AppProvider from "../providers/AppProvider";

import { Inter } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "cric-monex-root-template",
  description: "A boilerplate template for building a monorepo architecture with Turborepo, Next.js, Express and cric-packages.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{locale: string}>;
  }>
) {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${GeistSans.variable} ${inter.className}`}>
      <body>
      <NextIntlClientProvider messages={messages}>
        <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

