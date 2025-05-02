
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Exercise } from "@/data/types";

interface ExerciseCardProps {
  exercise: Exercise;
  onAddToWorkout?: (exercise: Exercise) => void;
}

const ExerciseCard = ({ exercise, onAddToWorkout }: ExerciseCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg">{exercise.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <Badge>{exercise.category}</Badge>
          {exercise.muscleGroup && <Badge variant="outline">{exercise.muscleGroup}</Badge>}
        </div>
        {exercise.description && (
          <p className="text-sm text-muted-foreground mt-3">{exercise.description}</p>
        )}
      </CardContent>
      {onAddToWorkout && (
        <CardFooter className="px-6 py-4 bg-muted/20">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center justify-center gap-2"
            onClick={() => onAddToWorkout(exercise)}
          >
            <Plus size={14} />
            Add to Workout
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ExerciseCard;
