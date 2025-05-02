
import { CalendarDays, ChevronRight, Dumbbell } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Workout } from "@/data/types";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Card className="workout-card">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-xl">{workout.name}</h3>
            {workout.description && (
              <p className="text-sm text-muted-foreground mt-1">{workout.description}</p>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <CalendarDays size={14} />
            <span>{format(parseISO(workout.createdAt), "MMM d, yyyy")}</span>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {workout.exercises.map((exercise) => (
            <Badge key={exercise.id} variant="outline" className="flex items-center gap-1">
              <Dumbbell size={12} />
              {exercise.exercise.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4 bg-muted/20 flex items-center justify-between">
        <div className="text-sm">
          <span className="font-medium">{workout.exercises.length}</span> exercises • 
          <span className="font-medium ml-1">
            {workout.exercises.reduce((acc, ex) => acc + ex.sets.length, 0)}
          </span> sets
        </div>
        <Button asChild size="sm" className="text-xs gap-1">
          <Link to={`/workout/${workout.id}`}>
            Start Workout <ChevronRight size={14} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
