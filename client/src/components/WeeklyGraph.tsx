import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
import { MOOD_OPTIONS } from "./MoodPicker";

interface MoodEntry {
  date: string;
  mood: string;
  moodLabel: string;
  moodEmoji: string;
  moodColor: string;
  value: number;
}

interface WeeklyGraphProps {
  data: MoodEntry[];
}

export default function WeeklyGraph({ data }: WeeklyGraphProps) {
  const moodToValue: Record<string, number> = {
    'great': 5,
    'good': 4,
    'okay': 3,
    'not-great': 2,
    'sad': 1,
    'anxious': 2,
    'calm': 4,
    'tired': 3,
  };

  const chartData = data.map(entry => ({
    ...entry,
    value: moodToValue[entry.mood] || 3,
  }));

  return (
    <Card data-testid="card-weekly-graph">
      <CardHeader className="gap-1">
        <CardTitle>Your Week at a Glance</CardTitle>
        <p className="text-sm text-muted-foreground">Mood trends over the past 7 days</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis 
              dataKey="date" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              domain={[0, 5]}
              ticks={[1, 2, 3, 4, 5]}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.moodColor} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {chartData.map((entry, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 text-sm bg-muted/50 rounded-lg px-3 py-1.5"
              data-testid={`mood-indicator-${entry.date}`}
            >
              <span className="text-2xl">{entry.moodEmoji}</span>
              <span className="text-muted-foreground">{entry.date}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
