
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recentSessions } from "@/data/sample-data";

const RecentWorkouts = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <CalendarDays size={18} />
          Recent Workouts
        </CardTitle>
        <CardDescription>Your latest workout sessions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {recentSessions.map((session) => (
            <div key={session.id} className="flex items-start justify-between border-b pb-4 last:border-0">
              <div>
                <h4 className="font-semibold">{session.workout.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <CalendarDays size={14} />
                    {format(new Date(session.startTime), "MMM d, yyyy")}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {format(new Date(session.startTime), "h:mm a")} - 
                    {session.endTime && format(new Date(session.endTime), " h:mm a")}
                  </span>
                </div>
                <div className="mt-2">
                  {session.exercises.map((exercise) => (
                    <Badge key={exercise.id} variant="outline" className="mr-2 mb-2">
                      {exercise.exercise.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <Badge className={session.completed ? "bg-fitness-accent" : "bg-amber-500"}>
                {session.completed ? "Completed" : "In Progress"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentWorkouts;
