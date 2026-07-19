import { Meal, WeekRotation } from '../../types';

export const DEFAULT_AMOUNTS = {
  protein: 8,
  starch: 2.5,
  veg: 2.5,
  organ: 0.5,
  broth: 0.75,
};

export const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Complete 4-week meal template (protein placeholders are overwritten)
export const WEEKS_BASE: Record<number, Record<string, { am: Meal; pm: Meal }>> = {
  1: {
    Sun: { am: { protein: 'Sardines (canned)', starch: 'Quinoa (cooked)', veg: 'Green Beans', organ: null },
          pm: { protein: 'Beef (85/15)', starch: 'Quinoa (cooked)', veg: 'Carrots', organ: 'Beef Heart' } },
    Mon: { am: { protein: 'Beef (85/15)', starch: 'Quinoa (cooked)', veg: 'Green Beans', organ: 'Beef Heart' },
          pm: { protein: 'Ground Turkey', starch: 'Oats (cooked)', veg: 'Zucchini', organ: 'Chicken Liver' } },
    Tue: { am: { protein: 'Beef (85/15)', starch: 'Sweet Potato (cooked)', veg: 'Bell Peppers', organ: 'Beef Heart' },
          pm: { protein: 'Ground Turkey', starch: 'Quinoa (cooked)', veg: 'Carrots', organ: 'Beef Liver' } },
    Wed: { am: { protein: 'Beef (85/15)', starch: 'Oats (cooked)', veg: 'Romaine Lettuce', organ: 'Beef Heart' },
          pm: { protein: 'Ground Turkey', starch: 'Sweet Potato (cooked)', veg: 'Green Beans', organ: 'Chicken Liver' } },
    Thu: { am: { protein: 'Sardines (canned)', starch: 'Quinoa (cooked)', veg: 'Zucchini', organ: null },
          pm: { protein: 'Ground Turkey', starch: 'Oats (cooked)', veg: 'Bell Peppers', organ: 'Beef Liver' } },
    Fri: { am: { protein: 'Beef (85/15)', starch: 'Quinoa (cooked)', veg: 'Green Beans', organ: 'Beef Liver' },
          pm: { protein: 'Ground Turkey', starch: 'Sweet Potato (cooked)', veg: 'Carrots', organ: 'Chicken Liver' } },
    Sat: { am: { protein: 'Beef (85/15)', starch: 'Sweet Potato (cooked)', veg: 'Peas', organ: 'Beef Heart' },
          pm: { protein: 'Ground Turkey', starch: 'Quinoa (cooked)', veg: 'Romaine Lettuce', organ: 'Beef Liver' } },
  },
  2: {
    Sun: { am: { protein: 'Salmon (canned)', starch: 'Sweet Potato (cooked)', veg: 'Green Beans', organ: null },
          pm: { protein: 'Pork Loin', starch: 'Quinoa (cooked)', veg: 'Bell Peppers', organ: 'Beef Heart' } },
    Mon: { am: { protein: 'Pork Loin', starch: 'Quinoa (cooked)', veg: 'Zucchini', organ: 'Beef Heart' },
          pm: { protein: 'Ground Chicken', starch: 'Sweet Potato (cooked)', veg: 'Peas', organ: 'Beef Liver' } },
    Tue: { am: { protein: 'Pork Loin', starch: 'Oats (cooked)', veg: 'Bell Peppers', organ: 'Beef Liver' },
          pm: { protein: 'Ground Chicken', starch: 'Quinoa (cooked)', veg: 'Green Beans', organ: 'Chicken Liver' } },
    Wed: { am: { protein: 'Pork Loin', starch: 'Sweet Potato (cooked)', veg: 'Carrots', organ: 'Chicken Liver' },
          pm: { protein: 'Ground Chicken', starch: 'Oats (cooked)', veg: 'Zucchini', organ: 'Beef Heart' } },
    Thu: { am: { protein: 'Salmon (canned)', starch: 'Quinoa (cooked)', veg: 'Green Beans', organ: null },
          pm: { protein: 'Ground Chicken', starch: 'Sweet Potato (cooked)', veg: 'Romaine Lettuce', organ: 'Beef Liver' } },
    Fri: { am: { protein: 'Pork Loin', starch: 'Quinoa (cooked)', veg: 'Peas', organ: 'Beef Heart' },
          pm: { protein: 'Ground Chicken', starch: 'Oats (cooked)', veg: 'Bell Peppers', organ: 'Chicken Liver' } },
    Sat: { am: { protein: 'Pork Loin', starch: 'Sweet Potato (cooked)', veg: 'Green Beans', organ: 'Beef Liver' },
          pm: { protein: 'Ground Chicken', starch: 'Quinoa (cooked)', veg: 'Zucchini', organ: 'Beef Heart' } },
  },
  3: {
    Sun: { am: { protein: 'Sardines (canned)', starch: 'Quinoa (cooked)', veg: 'Peas', organ: null },
          pm: { protein: 'Ground Turkey', starch: 'Sweet Potato (cooked)', veg: 'Green Beans', organ: 'Beef Heart' } },
    Mon: { am: { protein: 'Ground Turkey', starch: 'Quinoa (cooked)', veg: 'Bell Peppers', organ: 'Chicken Liver' },
          pm: { protein: 'Beef (85/15)', starch: 'Sweet Potato (cooked)', veg: 'Green Beans', organ: 'Beef Heart' } },
    Tue: { am: { protein: 'Ground Turkey', starch: 'Oats (cooked)', veg: 'Romaine Lettuce', organ: 'Beef Liver' },
          pm: { protein: 'Beef (85/15)', starch: 'Quinoa (cooked)', veg: 'Zucchini', organ: 'Chicken Liver' } },
    Wed: { am: { protein: 'Ground Turkey', starch: 'Sweet Potato (cooked)', veg: 'Carrots', organ: 'Beef Heart' },
          pm: { protein: 'Beef (85/15)', starch: 'Oats (cooked)', veg: 'Bell Peppers', organ: 'Beef Liver' } },
    Thu: { am: { protein: 'Sardines (canned)', starch: 'Quinoa (cooked)', veg: 'Green Beans', organ: null },
          pm: { protein: 'Beef (85/15)', starch: 'Sweet Potato (cooked)', veg: 'Peas', organ: 'Chicken Liver' } },
    Fri: { am: { protein: 'Ground Turkey', starch: 'Oats (cooked)', veg: 'Zucchini', organ: 'Chicken Liver' },
          pm: { protein: 'Beef (85/15)', starch: 'Quinoa (cooked)', veg: 'Carrots', organ: 'Beef Heart' } },
    Sat: { am: { protein: 'Ground Turkey', starch: 'Sweet Potato (cooked)', veg: 'Peas', organ: 'Beef Liver' },
          pm: { protein: 'Beef (85/15)', starch: 'Quinoa (cooked)', veg: 'Romaine Lettuce', organ: 'Beef Heart' } },
  },
  4: {
    Sun: { am: { protein: 'Salmon (canned)', starch: 'Quinoa (cooked)', veg: 'Zucchini', organ: null },
          pm: { protein: 'Ground Chicken', starch: 'Oats (cooked)', veg: 'Green Beans', organ: 'Beef Heart' } },
    Mon: { am: { protein: 'Ground Chicken', starch: 'Sweet Potato (cooked)', veg: 'Peas', organ: 'Beef Heart' },
          pm: { protein: 'Pork Loin', starch: 'Quinoa (cooked)', veg: 'Bell Peppers', organ: 'Beef Liver' } },
    Tue: { am: { protein: 'Ground Chicken', starch: 'Quinoa (cooked)', veg: 'Bell Peppers', organ: 'Chicken Liver' },
          pm: { protein: 'Pork Loin', starch: 'Oats (cooked)', veg: 'Zucchini', organ: 'Beef Heart' } },
    Wed: { am: { protein: 'Ground Chicken', starch: 'Oats (cooked)', veg: 'Carrots', organ: 'Beef Liver' },
          pm: { protein: 'Pork Loin', starch: 'Sweet Potato (cooked)', veg: 'Green Beans', organ: 'Chicken Liver' } },
    Thu: { am: { protein: 'Salmon (canned)', starch: 'Sweet Potato (cooked)', veg: 'Peas', organ: null },
          pm: { protein: 'Pork Loin', starch: 'Quinoa (cooked)', veg: 'Romaine Lettuce', organ: 'Beef Heart' } },
    Fri: { am: { protein: 'Ground Chicken', starch: 'Quinoa (cooked)', veg: 'Green Beans', organ: 'Beef Heart' },
          pm: { protein: 'Pork Loin', starch: 'Oats (cooked)', veg: 'Bell Peppers', organ: 'Beef Liver' } },
    Sat: { am: { protein: 'Ground Chicken', starch: 'Sweet Potato (cooked)', veg: 'Zucchini', organ: 'Beef Liver' },
          pm: { protein: 'Pork Loin', starch: 'Quinoa (cooked)', veg: 'Carrots', organ: 'Beef Heart' } },
  },
};

function cycleFav(arr: string[], idx: number, fallback: string): string {
  return (arr && arr.length) ? arr[idx % arr.length] : fallback;
}

export function regenerateRotation(
  selectedProteins: string[],
  favorites: { vegs: string[]; starches: string[]; organs: string[] }
): WeekRotation {
  const mains = selectedProteins.filter(p => p !== 'Sardines (canned)' && p !== 'Salmon (canned)');
  const fish = selectedProteins.filter(p => p === 'Sardines (canned)' || p === 'Salmon (canned)');
  while (mains.length < 4) mains.push('Beef (85/15)');
  const weekMainA = { 1: mains[0], 2: mains[2], 3: mains[1], 4: mains[3] };
  const weekMainB = { 1: mains[1], 2: mains[3], 3: mains[0], 4: mains[2] };
  const weekAlt   = { 1: fish[0] || mains[0], 2: fish[1] || mains[2], 3: fish[0] || mains[1], 4: fish[1] || mains[3] };

  const newWeeks: WeekRotation = {};
  let mealCounter = 0;
  for (let wk = 1; wk <= 4; wk++) {
    newWeeks[wk] = {};
    for (const day of DAYS_OF_WEEK) {
      const base = WEEKS_BASE[wk]?.[day];
      if (!base) continue;
      const isAltDay = (day === 'Thu' || day === 'Sun');
      newWeeks[wk][day] = {
        am: {
          protein: isAltDay ? weekAlt[wk] : weekMainA[wk],
          starch: cycleFav(favorites.starches, mealCounter * 2, base.am.starch),
          veg: cycleFav(favorites.vegs, mealCounter * 2, base.am.veg),
          organ: cycleFav(favorites.organs, mealCounter * 2, base.am.organ ?? ''),
        },
        pm: {
          protein: weekMainB[wk],
          starch: cycleFav(favorites.starches, mealCounter * 2 + 1, base.pm.starch),
          veg: cycleFav(favorites.vegs, mealCounter * 2 + 1, base.pm.veg),
          organ: cycleFav(favorites.organs, mealCounter * 2 + 1, base.pm.organ ?? ''),
        },
      };
      mealCounter++;
    }
  }
  return newWeeks;
}

export function getWeekNumber(y: number, m: number, d: number): number {
  const jan1 = new Date(y, 0, 1);
  const doy = Math.round((new Date(y, m, d).getTime() - jan1.getTime()) / 86400000);
  return (Math.floor(doy / 7) % 4) + 1;
}

export function getDayOfWeek(y: number, m: number, d: number): number {
  return new Date(y, m, d).getDay();
}

export function getMealForDate(
  rotation: WeekRotation,
  y: number, m: number, d: number,
  slot: 'am' | 'pm'
): Meal | null {
  const week = getWeekNumber(y, m, d);
  const day = DAYS_OF_WEEK[getDayOfWeek(y, m, d)];
  const weekData = rotation[week];
  if (!weekData) return null;
  const dayData = weekData[day];
  if (!dayData) return null;
  return dayData[slot] || null;
}
