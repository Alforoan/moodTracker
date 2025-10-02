import { Card, CardContent } from "@/components/ui/card";
import { MOOD_OPTIONS } from "./MoodPicker";

interface Note {
  id: string;
  date: string;
  mood: string;
  moodEmoji: string;
  moodColor: string;
  note: string;
}

interface NotesListProps {
  notes: Note[];
}

export default function NotesList({ notes }: NotesListProps) {
  if (notes.length === 0) {
    return (
      <div className="text-center py-12 space-y-3">
        <div className="text-6xl">📝</div>
        <p className="text-muted-foreground" data-testid="text-empty-notes">
          No reflections yet. Start logging your moods!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <h3 className="text-lg font-semibold mb-4" data-testid="text-notes-title">
        Your Reflections
      </h3>
      {notes.map((note) => (
        <Card 
          key={note.id} 
          className="overflow-hidden hover-elevate"
          style={{ borderLeftWidth: '4px', borderLeftColor: note.moodColor }}
          data-testid={`card-note-${note.id}`}
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl" role="img" aria-label={note.mood}>
                {note.moodEmoji}
              </span>
              <div>
                <p className="text-sm font-medium" data-testid={`text-note-date-${note.id}`}>
                  {note.date}
                </p>
                <p className="text-xs text-muted-foreground capitalize">
                  {note.mood}
                </p>
              </div>
            </div>
            {note.note && (
              <p className="font-accent text-lg text-foreground/90 leading-relaxed pl-12" data-testid={`text-note-content-${note.id}`}>
                {note.note}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
