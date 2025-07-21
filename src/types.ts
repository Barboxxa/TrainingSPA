// src/types.ts

export interface Exercise {
  name: string;
  details?: string; // Para supersets ou observações
  gifUrl?: string;
}

export interface DailyWorkout {
  day: string;
  group: string;
  exercises: Exercise[];
  details?: string;
}

export interface MonthlyPlan {
  month: number;
  title: string;
  focus: string;
  sets: string;
  reps: string;
  rest: string;
  schedule: DailyWorkout[];
}

export interface RunningPhase {
  id: number;
  weeks: string;
  title: string;
  details: {
    aquecimento: string;
    treino: string;
    desaquecimento: string;
  };
}
