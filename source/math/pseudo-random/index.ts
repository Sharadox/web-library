/** A deterministic number in [0, 1) for a seed: the same seed always gives the same value (stable renders). */
export function pseudoRandom(seed: number): number {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}
