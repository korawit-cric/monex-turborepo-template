import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'th'] as const;
export const localePrefix = 'always';
export const defaultLocale = 'th';
export const routing =
  defineRouting({ locales, defaultLocale, localePrefix });

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export type Locale = (typeof locales)[number];
