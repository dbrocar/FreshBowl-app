import { IDogService } from '../interfaces';
import { Dog } from '../../../types';

const STORAGE_KEY = 'bw_dogs';
const ACTIVE_KEY = 'bw_active_dog';

export class LocalDogService implements IDogService {
  private dogs: Dog[] = [];
  private activeId: string = '';

  constructor() {
    this.load();
  }

  private load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      this.dogs = raw ? JSON.parse(raw) : [];
      this.activeId = localStorage.getItem(ACTIVE_KEY) || (this.dogs[0]?.id || '');
    } catch {
      this.dogs = [];
      this.activeId = '';
    }
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dogs));
    localStorage.setItem(ACTIVE_KEY, this.activeId);
  }

  getDogs(): Dog[] {
    return this.dogs;
  }

  getActiveDogId(): string {
    return this.activeId;
  }

  switchDog(id: string): void {
    if (this.dogs.some(d => d.id === id)) {
      this.activeId = id;
      this.save();
    }
  }

  addDog(name: string): Dog {
    const newDog: Dog = { id: 'dog_' + Date.now(), name, createdAt: new Date().toISOString() };
    this.dogs.push(newDog);
    this.activeId = newDog.id;
    this.save();
    return newDog;
  }

  deleteDog(id: string): void {
    if (this.dogs.length <= 1) throw new Error('Cannot delete the last dog');
    this.dogs = this.dogs.filter(d => d.id !== id);
    if (this.activeId === id) {
      this.activeId = this.dogs[0].id;
    }
    this.save();
  }

  updateDog(id: string, data: Partial<Dog>): void {
    const dog = this.dogs.find(d => d.id === id);
    if (dog) {
      Object.assign(dog, data);
      this.save();
    }
  }
}
