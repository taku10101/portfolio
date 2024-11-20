import { motion } from "@yamada-ui/react";

export const BubblyBackground = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute rounded-full bg-blue-300 opacity-20'
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
        />
      ))}
    </div>
  );
};
