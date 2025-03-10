/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "~/lib/next-intl";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locales.includes(locale as never)) notFound();

  const messages = (await import(`../../messages/${locale}/${locale}.json`))
    .default;

  return { messages };
});
