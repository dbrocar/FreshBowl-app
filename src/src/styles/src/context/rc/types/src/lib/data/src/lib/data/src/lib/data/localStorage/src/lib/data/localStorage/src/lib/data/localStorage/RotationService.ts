import { IRotationService } from '../interfaces';
import { WeekRotation } from '../../../types';
import { regenerateRotation } from '../../nutrition/rotation';

export class LocalRotationService implements IRotationService {
  private dogId: string;

  constructor(dogId: string) {
    this.dogId = dogId;
  }

  getRotation(): WeekRotation {
    const key = `bw_${this.dogId}_rotation`;
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.rotation) return parsed.rotation;
      }
    } catch {}
    // Default rotation
    const defaultProteins = ['Beef (85/15)', 'Ground Turkey', 'Pork Loin', 'Ground Chicken'];
    const defaultFavs = { vegs: [], starches: [], organs: [] };
    const rotation = regenerateRotation(defaultProteins, defaultFavs);
    localStorage.setItem(key, JSON.stringify({ rotation, selectedProteins: defaultProteins, favorites: defaultFavs }));
    return rotation;
  }

  regenerateRotation(selectedProteins: string[], favorites: { vegs: string[]; starches: string[]; organs: string[] }): void {
    const key = `bw_${this.dogId}_rotation`;
    const rotation = regenerateRotation(selectedProteins, favorites);
    localStorage.setItem(key, JSON.stringify({ rotation, selectedProteins, favorites }));
  }
}
