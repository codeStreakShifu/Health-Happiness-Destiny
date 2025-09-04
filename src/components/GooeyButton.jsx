import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './GooeyButton.module.css';

export default function GooeyButton({ children }) {
  const buttonRef = useRef(null);
  const bubbleRef = useRef(null);
  
  useEffect(() => {
    const bubbles = [...Array(8)].map(() => {
      const bubble = document.createElement('div');
      bubble.className = styles.bubble;
      bubbleRef.current.appendChild(bubble);
      return bubble;
    });
    
    const timeline = gsap.timeline({ paused: true });
    
    bubbles.forEach((bubble, i) => {
      const angle = (i / bubbles.length) * Math.PI * 2;
      
      timeline.to(bubble, {
        duration: 0.8,
        x: Math.cos(angle) * 40,
        y: Math.sin(angle) * 40,
        scale: 1,
        ease: "power1.out"
      }, 0)
      .to(bubble, {
        duration: 0.4,
        scale: 0,
        opacity: 0,
        ease: "power2.in"
      }, ">-0.3");
    });
    
    timeline.to(buttonRef.current, {
      duration: 0.4,
      scale: 1.1,
      ease: "power1.out"
    }, 0)
    .to(buttonRef.current, {
      duration: 0.6,
      scale: 1,
      ease: "elastic.out(1, 0.5)"
    }, 0.2);

    const handleMouseEnter = () => {
      timeline.restart();
    };

    buttonRef.current.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      buttonRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      timeline.kill();
    };
  }, []);

  return (
    <div className={styles.container}>
      <svg className={styles.goo}>
        <defs>
          <filter id="gooey-bubble">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      
      <div className={styles.buttonWrapper}>
        <button ref={buttonRef} className={styles.button}>
          {children}
        </button>
        <div ref={bubbleRef} className={styles.bubbleContainer}></div>
      </div>
    </div>
  );
}