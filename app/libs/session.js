// import "server-only";
// import { SignJWT, jwtVerify } from "jose";
// import { cookies } from "next/headers";

// const secret = "secret"; // replace with process.env.SESSION_SECRET
// const encodedKey = new TextEncoder().encode(secret);

// export async function createSession(userId) {
//   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
//   const session = await encrypt({ userId, expiresAt });
//   (await cookies()).set("session", session, {
//     httpOnly: true,
//     secure: true,
//     expires: expiresAt,
//   });
// }

// export async function deleteSession() {
//     (await cookies()).delete("session")
// }

// export async function encrypt(payload) {
//   return new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("7d")
//     .sign(encodedKey);
// }

// export async function decrypt(session) {
//   try {
//     const { payload } = await jwtVerify(session, encodedKey, {
//       algorithms: ["HS256"],
//     });
//     return payload;
//   } catch (error) {
//     console.log("Failed to verify session");
//   }
// }
