
import React from 'react';

interface RainProps {
  count: number;
}

const Rain: React.FC<RainProps> = ({ count }) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * -100;
        const delay = Math.random() * 2;
        const opacity = 0.2 + Math.random() * 0.4;
        const scale = 0.5 + Math.random();

        return (
          <div
            key={i}
            className="rain-drop absolute w-[1.5px] h-[60px] bg-gradient-to-b from-transparent via-blue-200 to-white/40 rounded-full opacity-0"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform: `scale(${scale})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Rain;
