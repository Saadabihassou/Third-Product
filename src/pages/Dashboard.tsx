
import { Activity, Dumbbell, Calendar, Award } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import RecentWorkouts from "@/components/dashboard/RecentWorkouts";
import { userStats } from "@/data/sample-data";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Track your progress and manage your workouts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Workouts" 
          value={userStats.totalWorkouts} 
          icon={<Activity className="h-6 w-6" />} 
        />
        <StatCard 
          title="Current Streak" 
          value={userStats.streak} 
          icon={<Award className="h-6 w-6" />}
          description="days in a row" 
        />
        <StatCard 
          title="This Week" 
          value={userStats.workoutsThisWeek} 
          icon={<Calendar className="h-6 w-6" />}
          description="workouts completed" 
        />
        <StatCard 
          title="Total Exercises" 
          value={userStats.totalExercises} 
          icon={<Dumbbell className="h-6 w-6" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentWorkouts />
      </div>
    </div>
  );
};

export default Dashboard;
