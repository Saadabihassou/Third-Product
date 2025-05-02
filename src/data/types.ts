
export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'cardio' | 'flexibility' | 'other';
  muscleGroup?: string;
  description?: string;
}

export interface ExerciseSet {
  id: string;
  weight?: number;
  reps?: number;
  duration?: number; // in seconds
  distance?: number; // in meters
  completed: boolean;
}

export interface WorkoutExercise {
  id: string;
  exerciseId: string;
  exercise: Exercise;
  sets: ExerciseSet[];
  notes?: string;
}

export interface Workout {
  id: string;
  name: string;
  description?: string;
  exercises: WorkoutExercise[];
  createdAt: string;
  updatedAt?: string;
}

export interface WorkoutSession {
  id: string;
  workoutId: string;
  workout: Workout;
  startTime: string;
  endTime?: string;
  completed: boolean;
  exercises: WorkoutExercise[];
  notes?: string;
}

export interface UserStats {
  totalWorkouts: number;
  totalExercises: number;
  workoutsThisWeek: number;
  workoutsThisMonth: number;
  streak: number;
  lastWorkout?: string;
}
