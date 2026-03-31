import { motion, MotionValue, useTransform } from "motion/react";

export function RevealWord({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-2 inline-block">
      <span className="text-[#001B44]/10">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#001B44]"
        aria-hidden="true"
      >
        {children}
      </motion.span>
    </span>
  );
}
