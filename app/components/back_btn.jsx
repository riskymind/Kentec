'use client';
import { useRouter } from 'next/navigation';

function BackButton({
  className,
  children,
}) {
  const router = useRouter()
  return (
    <button className={className} onClick={() => router.back()}>
      {children || "Back"}
    </button>
  );
}

export default BackButton;