export default function AbstractWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute w-full h-full opacity-30"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#60A5FA' }} />
            <stop offset="100%" style={{ stopColor: '#3B82F6' }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#blob-gradient)"
          d="M600.7,315.8C528.8,381.6,181.6,532.5,135.3,589.5s-57.3,272.1,35,280.7s392.6-132.8,459.9-214.3
          c67.3-81.5,242.3-175,218.9-253S672.7,250,600.7,315.8z"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="M600.7,315.8C528.8,381.6,181.6,532.5,135.3,589.5s-57.3,272.1,35,280.7s392.6-132.8,459.9-214.3
            c67.3-81.5,242.3-175,218.9-253S672.7,250,600.7,315.8z;
            
            M667.4,321.5C595.5,387.3,157.6,563.5,111.3,620.5s-20.3,241.1,72,249.7s392.6-132.8,459.9-214.3
            c67.3-81.5,242.3-175,218.9-253S739.4,255.7,667.4,321.5z;
            
            M600.7,315.8C528.8,381.6,181.6,532.5,135.3,589.5s-57.3,272.1,35,280.7s392.6-132.8,459.9-214.3
            c67.3-81.5,242.3-175,218.9-253S672.7,250,600.7,315.8z"
          />
        </path>
      </svg>
    </div>
  );
}