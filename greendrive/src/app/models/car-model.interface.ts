export interface CarModel {
  readonly id: string;
  readonly nameKey: string;
  readonly taglineKey: string;
  readonly rangeKm: number;
  readonly accelerationSeconds: number;
  readonly priceEur: number;
  readonly gradientFrom: string;
  readonly gradientTo: string;
}
