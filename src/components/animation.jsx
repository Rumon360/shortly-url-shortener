export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0 },
};

export const inputFade = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

export const burgerAnim = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
};
