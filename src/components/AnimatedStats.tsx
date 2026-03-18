"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Years Building Software" },
  { value: 4, suffix: "", label: "Fortune 500 Companies" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
];

function CountUp({
  target,
  suffix,
  shouldAnimate,
}: {
  target: number;
  suffix: string;
  shouldAnimate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [shouldAnimate, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-foreground/60 mb-12">
          By the numbers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <span className="font-heading text-5xl md:text-6xl font-bold text-accent-secondary">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  shouldAnimate={isInView}
                />
              </span>
              <span className="mt-2 text-sm text-foreground/60">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
