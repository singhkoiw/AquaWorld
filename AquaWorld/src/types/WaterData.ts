export interface WaterData {
  id: number;
  country: string;
  waterQuality: number;
  freshwaterResource: number;
  population: number;
}


export interface WaterInfo {
  country: string;
  year: string;
  value: number | null;
}