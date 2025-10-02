import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import MoodPicker, { MOOD_OPTIONS, type MoodOption } from "./MoodPicker";

interface MoodEntryFormProps {
  onSubmit: (mood: MoodOption, note: string) => void;
  isSubmitting?: boolean;
}

export default function MoodEntryForm({ onSubmit, isSubmitting }: MoodEntryFormProps) {
  const [selectedMood, setSelectedMood] = useState<MoodOption | null>(null);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!selectedMood) {
      setError("Please select a mood before saving");
      return;
    }
    
    setError("");
    onSubmit(selectedMood, note);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <MoodPicker
        selectedMood={selectedMood?.value}
        onMoodSelect={(mood) => {
          setSelectedMood(mood);
          setError("");
        }}
      />

      {error && (
        <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg p-3" data-testid="text-error-message">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="mood-note">
          How are you feeling? (Optional)
        </label>
        <Textarea
          id="mood-note"
          placeholder="What happened today? Any thoughts or reflections..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="resize-none min-h-32 font-accent text-lg"
          data-testid="input-mood-note"
        />
      </div>

      <Button 
        className="w-full"
        onClick={handleSubmit}
        disabled={isSubmitting}
        data-testid="button-log-mood"
      >
        {isSubmitting ? "Logging..." : "Log Today's Mood"}
      </Button>
    </div>
  );
}
