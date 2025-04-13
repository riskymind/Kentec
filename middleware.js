// export { default } from 'next-auth/middleware';

// export const config = {
//   matcher: ['/messages'],
// };

import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized({ token }) {
      console.log("Running middleware. Token:", token);
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/messages", "/profile", '/stamp/saved', '/stamp/create_stamp'],
};
