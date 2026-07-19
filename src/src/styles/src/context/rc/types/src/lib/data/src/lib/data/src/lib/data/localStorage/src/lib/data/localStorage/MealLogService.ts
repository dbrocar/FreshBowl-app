import { IMealLogService } from '../interfaces';
import { MealLogEntry } from '../../../types';

export class LocalMealLogService implements IMealLogService {
  private dogId: string;
  private prefix: string;

  constructor(dogId: string) {
    this.dogId = dogId;
    this.prefix = `bw_${dogId}_`;
  }

  private getKey(suffix: string): string {
    return this.prefix + suffix;
  }

  private getData<T>(key: string): T {
    try {
      const raw = localStorage.getItem(this.getKey(key));
      return raw ? JSON.parse(raw) : ({} as T);
    } catch {
      return {} as T;
    }
  }

  private setData<T>(key: string, data: T) {
    localStorage.setItem(this.getKey(key), JSON.stringify(data));
  }

  getLogs(): Record<string, MealLogEntry> {
    return this.getData('logs');
  }

  private updateLog(key: string, updater: (entry: MealLogEntry) => MealLogEntry) {
    const logs = this.getLogs();
    const entry = logs[key] || { fed: false };
    logs[key] = updater(entry);
    this.setData('logs', logs);
  }

  setLog(key: string, entry: Partial<MealLogEntry>): void {
    this.updateLog(key, (e) => ({ ...e, ...entry }));
  }

  toggleFed(key: string): void {
    this.updateLog(key, (e) => ({ ...e, fed: !e.fed }));
  }

  setAddins(key: string, addins: Record<string, number>): void {
    this.updateLog(key, (e) => ({ ...e, addins }));
  }

  setProducts(key: string, products: Record<string, number>): void {
    this.updateLog(key, (e) => ({ ...e, products }));
  }

  setNote(key: string, note: string): void {
    this.updateLog(key, (e) => ({ ...e, note }));
  }

  setSwap(key: string, category: 'protein' | 'starch' | 'veg' | 'organ' | 'broth', value: string | null): void {
    this.updateLog(key, (e) => {
      const swaps = e.swaps || {};
      if (value === null) delete swaps[category];
      else swaps[category] = value;
      return { ...e, swaps };
    });
  }

  setAmount(key: string, category: 'protein' | 'starch' | 'veg' | 'organ' | 'broth', amount: number | null): void {
    this.updateLog(key, (e) => {
      const amounts = e.amounts || {};
      if (amount === null) delete amounts[category];
      else amounts[category] = amount;
      return { ...e, amounts };
    });
  }

  setSupplement(key: string, supplementId: string, checked: boolean): void {
    this.updateLog(key, (e) => {
      const supps = e.supplements || {};
      supps[supplementId] = checked;
      return { ...e, supplements: supps };
    });
  }

  getLogsForDateRange(startDate: Date, endDate: Date): Record<string, MealLogEntry> {
    const logs = this.getLogs();
    const result: Record<string, MealLogEntry> = {};
    const current = new Date(startDate);
    while (current <= endDate) {
      const key = current.toISOString().split('T')[0];
      if (logs[key]) result[key] = logs[key];
      current.setDate(current.getDate() + 1);
    }
    return result;
  }
}
