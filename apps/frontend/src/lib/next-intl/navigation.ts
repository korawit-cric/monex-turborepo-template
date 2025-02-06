import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'th'] as const;
export const localePrefix = 'always';
export const defaultLocale = 'th';
export const routing =
  defineRouting({ locales, defaultLocale, localePrefix });

export type Locale = (typeof locales)[number];
