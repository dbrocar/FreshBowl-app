export interface Dog {
  id: string;
  name: string;
  photo?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Meal {
  protein: string;
  starch: string;
  veg: string;
  organ: string | null;
}

export interface WeekRotation {
  [week: number]: {
    [day: string]: {
      am: Meal;
      pm: Meal;
    };
  };
}

export interface MealLogEntry {
  fed: boolean;
  addins?: Record<string, number>;
  products?: Record<string, number>;
  notes?: string;
  swaps?: {
    protein?: string;
    starch?: string;
    veg?: string;
    organ?: string;
    broth?: string;
  };
  amounts?: {
    protein?: number;
    starch?: number;
    veg?: number;
    organ?: number;
    broth?: number;
  };
  supplements?: Record<string, boolean>;
}
