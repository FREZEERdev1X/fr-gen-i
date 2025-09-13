import React, { useMemo } from 'react';

const Snowfall: React.FC = () => {
  const snowflakes = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: `left-[${Math.random() * 100}%]`,
      size: ['w-0.5 h-0.5', 'w-1 h-1', 'w-[3px] h-[3px]'][Math.floor(Math.random() * 3)],
      durationClass: ['animate-fall-slow', 'animate-fall-medium', 'animate-fall-fast'][i % 3],
      swayClass: ['animate-sway-1', 'animate-sway-2'][i % 2],
      delay: `[animation-delay:${Math.random() * 20}s]`,
      opacity: `opacity-${Math.floor(Math.random() * 5) * 10 + 50}`
    }));
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className={`absolute top-0 rounded-full bg-white/80 ${flake.left} ${flake.size} ${flake.durationClass} ${flake.swayClass} ${flake.delay} ${flake.opacity}`}
        />
      ))}
    </div>
  );
};

export default Snowfall;
