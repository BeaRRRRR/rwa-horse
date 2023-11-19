'use client'

// store/useHorseStore.ts
import create from 'zustand';

interface Horse {
  id: string;
  name: string;
  age: string;
  height: string;
  gender: string;
  raceType: string;
  breed: string;
  color: string;
  description: string;
}

interface HorseStore {
  horses: Horse[];
  addHorse: (horse: Horse) => void;
}

const useHorseStore = create<HorseStore>((set) => ({
  horses: [],
  addHorse: (horse) => set((state) => ({ horses: [...state.horses, horse] })),
}));

export default useHorseStore;
