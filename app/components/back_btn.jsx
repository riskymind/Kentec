'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

function BackButton({
  className,
  children,
}) {
  const router = useRouter()
  return (
    <motion.button 
    whileTap={{scale: 0.9}}
    whileHover={{scale: 1.1}}
    className={className} onClick={() => router.back()}>
      {children || "Back"}
    </motion.button>
  );
}

export default BackButton;