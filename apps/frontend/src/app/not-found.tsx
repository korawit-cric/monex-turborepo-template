// To prevent the path that have no or invalid locale and redirect to default locale.

import { redirect } from 'next/navigation';

// Handling redirect to default locale when the locale not provided
const NotFoundRoot = () => {
  redirect('/');
};

export default NotFoundRoot;
