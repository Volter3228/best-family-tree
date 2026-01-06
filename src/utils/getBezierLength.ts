const NUMBER_OF_SEGMENTS = 5;

export const getBezierLength = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number => {
  // Larger value = more precise result (here we don't need that)
  let length = 0;
  let prevX = x1;
  let prevY = y1;

  // Algorithm is dividing the curve into smaller segments and caculating their width
  for (let i = 1; i <= NUMBER_OF_SEGMENTS; i++) {
    const t = i / NUMBER_OF_SEGMENTS;
    const x = (1 - t) * prevX + t * x2;
    const y = (1 - t) * prevY + t * y2;

    length += Math.sqrt((x - prevX) ** 2 + (y - prevY) ** 2);
    prevX = x;
    prevY = y;
  }

  return length;
};
