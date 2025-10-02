import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import MoodEntryForm from "@/components/MoodEntryForm";
import WeeklyGraph from "@/components/WeeklyGraph";
import NotesList from "@/components/NotesList";
import ThemeToggle from "@/components/ThemeToggle";
import type { MoodOption } from "@/components/MoodPicker";
import { BarChart3, NotebookPen, Plus } from "lucide-react";

interface MoodEntry {
  id: string;
  date: string;
  mood: string;
  moodLabel: string;
  moodEmoji: string;
  moodColor: string;
  note: string;
  value: number;
}

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Mock data for prototype - todo: remove mock functionality
  const [entries, setEntries] = useState<MoodEntry[]>([
    {
      id: '1',
      date: 'Mon',
      mood: 'great',
      moodLabel: 'Great',
      moodEmoji: '😊',
      moodColor: 'hsl(145 60% 50%)',
      note: 'Had an amazing day! Finally finished that project.',
      value: 5,
    },
    {
      id: '2',
      date: 'Tue',
      mood: 'good',
      moodLabel: 'Good',
      moodEmoji: '🙂',
      moodColor: 'hsl(140 50% 55%)',
      note: 'Productive day at work.',
      value: 4,
    },
    {
      id: '3',
      date: 'Wed',
      mood: 'okay',
      moodLabel: 'Okay',
      moodEmoji: '😐',
      moodColor: 'hsl(45 75% 60%)',
      note: 'Just an average day.',
      value: 3,
    },
  ]);

  const handleMoodSubmit = async (mood: MoodOption, note: string) => {
    setIsSubmitting(true);
    
    // Simulate API call - todo: remove mock functionality
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', { weekday: 'short' }),
      mood: mood.value,
      moodLabel: mood.label,
      moodEmoji: mood.emoji,
      moodColor: mood.color,
      note,
      value: 5,
    };
    
    setEntries([newEntry, ...entries]);
    
    toast({
      title: "Mood logged successfully! 🎉",
      description: note ? "Your reflection has been saved." : "Quick mood logged.",
    });
    
    setIsSubmitting(false);
  };

  const notesData = entries.map(entry => ({
    id: entry.id,
    date: entry.id === entries[0]?.id ? 'Today, ' + new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) : entry.date,
    mood: entry.mood,
    moodEmoji: entry.moodEmoji,
    moodColor: entry.moodColor,
    note: entry.note,
  }));

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">💭</div>
            <h1 className="text-xl font-semibold tracking-tight" data-testid="text-app-title">
              Mood Tracker
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <Tabs defaultValue="log" className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="log" className="gap-2" data-testid="tab-log">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Log Mood</span>
              <span className="sm:hidden">Log</span>
            </TabsTrigger>
            <TabsTrigger value="graph" className="gap-2" data-testid="tab-graph">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Weekly</span>
              <span className="sm:hidden">Week</span>
            </TabsTrigger>
            <TabsTrigger value="notes" className="gap-2" data-testid="tab-notes">
              <NotebookPen className="h-4 w-4" />
              <span className="hidden sm:inline">Reflections</span>
              <span className="sm:hidden">Notes</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="log" className="space-y-6 mt-8">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                How are you feeling?
              </h2>
              <p className="text-muted-foreground">
                Track your mood and add a reflection
              </p>
            </div>
            <MoodEntryForm 
              onSubmit={handleMoodSubmit} 
              isSubmitting={isSubmitting}
            />
          </TabsContent>

          <TabsContent value="graph" className="mt-8">
            <WeeklyGraph data={entries} />
          </TabsContent>

          <TabsContent value="notes" className="mt-8">
            <NotesList notes={notesData} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
