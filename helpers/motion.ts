export function varianMotion(delayValue: number) {
  const motion = {
    before: { opacity: 0, y: 20, transition: { type: 'spring' } },
    after: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', delay: delayValue },
    },
  };

  return motion;
}
