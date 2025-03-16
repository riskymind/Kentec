import Link from "next/link";

export default function NotFound() {
    return (
      <main className="w-3/5 mx-auto border border-rose-300 text-center h-full mt-10">
        <h1 className="text-7xl text-rose-400 text-center">404 Not found</h1>
        <p className="text-sm text-rose-400 mb-8">Unfortunately, we could not find the requested page or resource.</p>
        <Link href="/" className="hover:underline italic">Return Home</Link>
      </main>
    );
  }
  