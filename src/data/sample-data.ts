
import { Exercise, Workout, WorkoutSession, UserStats } from './types';

export const exercises: Exercise[] = [
  {
    id: 'ex1',
    name: 'Barbell Bench Press',
    category: 'strength',
    muscleGroup: 'chest',
    description: 'Lie on a bench and press a barbell upward from your chest.'
  },
  {
    id: 'ex2',
    name: 'Squat',
    category: 'strength',
    muscleGroup: 'legs',
    description: 'Lower your body by bending your knees and then stand back up.'
  },
  {
    id: 'ex3',
    name: 'Deadlift',
    category: 'strength',
    muscleGroup: 'back',
    description: 'Lift a barbell from the ground to hip level.'
  },
  {
    id: 'ex4',
    name: 'Pull-up',
    category: 'strength',
    muscleGroup: 'back',
    description: 'Hang from a bar and pull your body upward.'
  },
  {
    id: 'ex5',
    name: 'Treadmill Run',
    category: 'cardio',
    description: 'Run on a treadmill at your desired pace.'
  },
  {
    id: 'ex6',
    name: 'Push-up',
    category: 'strength',
    muscleGroup: 'chest',
    description: 'Lower your body to the ground and push back up using your arms.'
  },
  {
    id: 'ex7',
    name: 'Dumbbell Shoulder Press',
    category: 'strength',
    muscleGroup: 'shoulders',
    description: 'Press dumbbells upward from shoulder height.'
  },
  {
    id: 'ex8',
    name: 'Bicep Curl',
    category: 'strength',
    muscleGroup: 'arms',
    description: 'Curl weights toward your shoulders, focusing on the biceps.'
  }
];

export const workouts: Workout[] = [
  {
    id: 'w1',
    name: 'Upper Body Power',
    description: 'Focus on chest, shoulders, and triceps with heavy weights.',
    exercises: [
      {
        id: 'we1',
        exerciseId: 'ex1',
        exercise: exercises[0],
        sets: [
          { id: 's1', weight: 135, reps: 8, completed: false },
          { id: 's2', weight: 155, reps: 6, completed: false },
          { id: 's3', weight: 175, reps: 4, completed: false },
        ],
        notes: 'Focus on form'
      },
      {
        id: 'we2',
        exerciseId: 'ex7',
        exercise: exercises[6],
        sets: [
          { id: 's4', weight: 40, reps: 10, completed: false },
          { id: 's5', weight: 45, reps: 8, completed: false },
          { id: 's6', weight: 50, reps: 6, completed: false },
        ]
      },
      {
        id: 'we3',
        exerciseId: 'ex6',
        exercise: exercises[5],
        sets: [
          { id: 's7', reps: 15, completed: false },
          { id: 's8', reps: 15, completed: false },
          { id: 's9', reps: 15, completed: false },
        ]
      }
    ],
    createdAt: '2023-01-15T12:00:00Z'
  },
  {
    id: 'w2',
    name: 'Lower Body Focus',
    description: 'Leg day workout targeting quads, hamstrings, and glutes.',
    exercises: [
      {
        id: 'we4',
        exerciseId: 'ex2',
        exercise: exercises[1],
        sets: [
          { id: 's10', weight: 185, reps: 8, completed: false },
          { id: 's11', weight: 205, reps: 6, completed: false },
          { id: 's12', weight: 225, reps: 4, completed: false },
        ]
      },
      {
        id: 'we5',
        exerciseId: 'ex3',
        exercise: exercises[2],
        sets: [
          { id: 's13', weight: 225, reps: 8, completed: false },
          { id: 's14', weight: 245, reps: 6, completed: false },
          { id: 's15', weight: 265, reps: 4, completed: false },
        ],
        notes: 'Keep back straight'
      }
    ],
    createdAt: '2023-01-18T14:30:00Z'
  },
  {
    id: 'w3',
    name: 'Full Body Circuit',
    description: 'Complete circuit with minimal rest between exercises.',
    exercises: [
      {
        id: 'we6',
        exerciseId: 'ex6',
        exercise: exercises[5],
        sets: [
          { id: 's16', reps: 20, completed: false },
          { id: 's17', reps: 20, completed: false },
          { id: 's18', reps: 20, completed: false },
        ]
      },
      {
        id: 'we7',
        exerciseId: 'ex2',
        exercise: exercises[1],
        sets: [
          { id: 's19', weight: 135, reps: 12, completed: false },
          { id: 's20', weight: 135, reps: 12, completed: false },
          { id: 's21', weight: 135, reps: 12, completed: false },
        ]
      },
      {
        id: 'we8',
        exerciseId: 'ex4',
        exercise: exercises[3],
        sets: [
          { id: 's22', reps: 8, completed: false },
          { id: 's23', reps: 8, completed: false },
          { id: 's24', reps: 8, completed: false },
        ]
      },
      {
        id: 'we9',
        exerciseId: 'ex5',
        exercise: exercises[4],
        sets: [
          { id: 's25', duration: 600, distance: 1600, completed: false },
        ]
      }
    ],
    createdAt: '2023-01-20T09:15:00Z'
  }
];

export const recentSessions: WorkoutSession[] = [
  {
    id: 'ws1',
    workoutId: 'w1',
    workout: workouts[0],
    startTime: '2023-01-22T10:00:00Z',
    endTime: '2023-01-22T11:15:00Z',
    completed: true,
    exercises: [
      {
        id: 'we1s',
        exerciseId: 'ex1',
        exercise: exercises[0],
        sets: [
          { id: 's1s', weight: 135, reps: 8, completed: true },
          { id: 's2s', weight: 155, reps: 6, completed: true },
          { id: 's3s', weight: 175, reps: 5, completed: true },
        ],
        notes: 'Felt strong today'
      },
      {
        id: 'we2s',
        exerciseId: 'ex7',
        exercise: exercises[6],
        sets: [
          { id: 's4s', weight: 40, reps: 10, completed: true },
          { id: 's5s', weight: 45, reps: 8, completed: true },
          { id: 's6s', weight: 50, reps: 7, completed: true },
        ]
      },
      {
        id: 'we3s',
        exerciseId: 'ex6',
        exercise: exercises[5],
        sets: [
          { id: 's7s', reps: 15, completed: true },
          { id: 's8s', reps: 15, completed: true },
          { id: 's9s', reps: 12, completed: true },
        ]
      }
    ],
    notes: 'Great workout, increased weight on bench press.'
  },
  {
    id: 'ws2',
    workoutId: 'w2',
    workout: workouts[1],
    startTime: '2023-01-24T15:30:00Z',
    endTime: '2023-01-24T16:45:00Z',
    completed: true,
    exercises: [
      {
        id: 'we4s',
        exerciseId: 'ex2',
        exercise: exercises[1],
        sets: [
          { id: 's10s', weight: 185, reps: 8, completed: true },
          { id: 's11s', weight: 205, reps: 6, completed: true },
          { id: 's12s', weight: 225, reps: 3, completed: true },
        ]
      },
      {
        id: 'we5s',
        exerciseId: 'ex3',
        exercise: exercises[2],
        sets: [
          { id: 's13s', weight: 225, reps: 8, completed: true },
          { id: 's14s', weight: 245, reps: 6, completed: true },
          { id: 's15s', weight: 265, reps: 4, completed: true },
        ]
      }
    ],
    notes: 'Legs feeling weak today, struggled with the last set.'
  }
];

export const userStats: UserStats = {
  totalWorkouts: 24,
  totalExercises: 96,
  workoutsThisWeek: 3,
  workoutsThisMonth: 12,
  streak: 3,
  lastWorkout: '2023-01-24T16:45:00Z'
};
