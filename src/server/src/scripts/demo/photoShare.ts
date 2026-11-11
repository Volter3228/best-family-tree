/**
 * Two of every three members get a picture; the third stays without one, so the
 * demo shows both. By position, so every run picks the same people.
 */
export const hasDemoPhoto = (index: number) => index % 3 !== 2;
