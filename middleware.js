export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/stamp/create_stamp', '/profile', '/stamp/saved', '/messages'],
};
