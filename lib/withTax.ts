export function withTax(total: number): number {
  const tax = 10;

  return total + (total * tax) / 100;
}
