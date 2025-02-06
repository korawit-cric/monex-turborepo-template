import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/next-intl';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(th|en)/:path*']
};