import type { Variants } from 'framer-motion';

// Fade in animation from bottom
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Fade in animation from left
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Fade in animation from right
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Scale animation on hover for cards
export const cardHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
};

// Reusable animation for section entrance
export const sectionAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

// New advanced animations

// Reveal text animation (letter by letter)
export const textReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.04,
    }
  }
};

// Letter animation for text reveal
export const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    }
  }
};

// 3D tilt effect for cards
export const tiltEffect: Variants = {
  hover: (direction: number) => ({
    rotateY: direction * 7,
    rotateX: -7,
    z: 20,
    transition: { duration: 0.3 }
  })
};

// Parallax scroll effect
export const parallaxScroll = (y: number): Variants => ({
  initial: { y: 0 },
  animate: {
    y,
    transition: {
      repeat: 0,
      repeatType: 'reverse',
      duration: 1,
    }
  }
});

// Floating animation
export const floating: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
      ease: 'easeInOut',
    }
  }
};

// Path drawing animation for SVGs
export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
      opacity: { duration: 0.2 }
    }
  }
};

// Slide in from different directions
export const slideInFrom = (direction: string, distance = 100): Variants => {
  let initialX = 0;
  let initialY = 0;

  switch(direction) {
    case 'top':
      initialY = -distance;
      break;
    case 'bottom':
      initialY = distance;
      break;
    case 'left':
      initialX = -distance;
      break;
    case 'right':
      initialX = distance;
      break;
  }

  return {
    hidden: {
      x: initialX,
      y: initialY,
      opacity: 0
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 80
      }
    }
  };
};
