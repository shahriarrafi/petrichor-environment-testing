
import React from 'react';

const Tree: React.FC = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full max-w-[600px] h-full drop-shadow-2xl"
      fill="none"
      stroke="currentColor"
    >
      {/* Trunk and Main Branches */}
      <path
        className="tree-path text-amber-900/90"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="1000"
        d="M100,200 L100,140 C100,120 95,110 85,95 C75,80 70,70 70,50"
      />
      <path
        className="tree-path text-amber-900/90"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1000"
        d="M100,160 C110,140 125,130 140,110 C155,90 160,70 160,40"
      />
      <path
        className="tree-path text-amber-900/80"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1000"
        d="M100,145 C90,135 80,125 70,110 C60,95 50,85 45,60"
      />
      <path
        className="tree-path text-amber-900/80"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1000"
        d="M115,120 C125,100 135,90 145,85"
      />
      <path
        className="tree-path text-amber-900/70"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="1000"
        d="M85,105 C75,95 65,90 60,85"
      />

      {/* Leaves - initially hidden/scaled down */}
      <circle className="tree-leaf text-emerald-900/60 opacity-0 scale-0" fill="currentColor" cx="70" cy="50" r="6" style={{ transformOrigin: '70px 50px' }} />
      <circle className="tree-leaf text-emerald-800/50 opacity-0 scale-0" fill="currentColor" cx="160" cy="40" r="8" style={{ transformOrigin: '160px 40px' }} />
      <circle className="tree-leaf text-emerald-700/40 opacity-0 scale-0" fill="currentColor" cx="45" cy="60" r="5" style={{ transformOrigin: '45px 60px' }} />
      <circle className="tree-leaf text-emerald-900/40 opacity-0 scale-0" fill="currentColor" cx="145" cy="85" r="4" style={{ transformOrigin: '145px 85px' }} />
      <circle className="tree-leaf text-emerald-800/30 opacity-0 scale-0" fill="currentColor" cx="60" cy="85" r="4" style={{ transformOrigin: '60px 85px' }} />
      <circle className="tree-leaf text-emerald-600/20 opacity-0 scale-0" fill="currentColor" cx="100" cy="80" r="7" style={{ transformOrigin: '100px 80px' }} />
      <circle className="tree-leaf text-emerald-500/10 opacity-0 scale-0" fill="currentColor" cx="120" cy="60" r="6" style={{ transformOrigin: '120px 60px' }} />
    </svg>
  );
};

export default Tree;
