"use client"

export function WaveDecoration({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 320"
      className={`absolute pointer-events-none ${flip ? "rotate-180" : ""} ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
          <stop offset="50%" stopColor="rgba(236, 72, 153, 0.15)" />
          <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#waveGradient)"
        d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  )
}

export function FlowingLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 800"
      className={`absolute pointer-events-none opacity-30 ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
          <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
          <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
        </linearGradient>
      </defs>
      <path d="M50,0 Q100,200 50,400 Q0,600 50,800" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
      <path d="M100,0 Q150,200 100,400 Q50,600 100,800" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
      <path d="M150,0 Q200,200 150,400 Q100,600 150,800" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
    </svg>
  )
}
