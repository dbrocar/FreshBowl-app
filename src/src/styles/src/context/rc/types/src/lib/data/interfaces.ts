import { Dog, MealLogEntry, WeekRotation } from '../../types';

export interface IDogService {
  getDogs(): Dog[];
  getActiveDogId(): string;
  switchDog(id: string): void;
  addDog(name: string): Dog;
  deleteDog(id: string): void;
  updateDog(id: string, data: Partial<Dog>): void;
}

export interface IMealLogService {
  getLogs(): Record<string, MealLogEntry>;
  setLog(key: string, entry: Partial<MealLogEntry>): void;
  toggleFed(key: string): void;
  setAddins(key: string, addins: Record<string, number>): void;
  setProducts(key: string, products: Record<string, number>): void;
  setNote(key: string, note: string): void;
  setSwap(key: string, category: 'protein' | 'starch' | 'veg' | 'organ' | 'broth', value: string | null): void;
  setAmount(key: string, category: 'protein' | 'starch' | 'veg' | 'organ' | 'broth', amount: number | null): void;
  setSupplement(key: string, supplementId: string, checked: boolean): void;
  getLogsForDateRange(startDate: Date, endDate: Date): Record<string, MealLogEntry>;
}

export interface IRotationService {
  getRotation(): WeekRotation;
  regenerateRotation(selectedProteins: string[], favorites: { vegs: string[]; starches: string[]; organs: string[] }): void;
}
