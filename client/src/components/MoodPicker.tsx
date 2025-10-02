import { useState } from "react";

export interface MoodOption {
  emoji: string;
  label: string;
  value: string;
  color: string;
}

const MOOD_OPTIONS: MoodOption[] = [
  { emoji: "😊", label: "Great", value: "great", color: "hsl(145 60% 50%)" },
  { emoji: "🙂", label: "Good", value: "good", color: "hsl(140 50% 55%)" },
  { emoji: "😐", label: "Okay", value: "okay", color: "hsl(45 75% 60%)" },
  { emoji: "😔", label: "Not Great", value: "not-great", color: "hsl(210 50% 55%)" },
  { emoji: "😢", label: "Sad", value: "sad", color: "hsl(210 40% 50%)" },
  { emoji: "😰", label: "Anxious", value: "anxious", color: "hsl(280 50% 60%)" },
  { emoji: "😌", label: "Calm", value: "calm", color: "hsl(180 45% 55%)" },
  { emoji: "😴", label: "Tired", value: "tired", color: "hsl(220 20% 50%)" },
];

interface MoodPickerProps {
  selectedMood?: string;
  onMoodSelect: (mood: MoodOption) => void;
}

export default function MoodPicker({ selectedMood, onMoodSelect }: MoodPickerProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold" data-testid="text-mood-picker-title">
        How are you feeling today?
      </h3>
      <div className="grid grid-cols-4 gap-3">
        {MOOD_OPTIONS.map((mood) => (
          <button
            key={mood.value}
            onClick={() => onMoodSelect(mood)}
            className={`
              relative flex flex-col items-center gap-2 p-4 rounded-xl
              transition-all duration-200 hover-elevate active-elevate-2
              ${selectedMood === mood.value 
                ? 'ring-4 ring-primary scale-105' 
                : 'bg-card border border-card-border'
              }
            `}
            data-testid={`button-mood-${mood.value}`}
          >
            <span className="text-5xl" role="img" aria-label={mood.label}>
              {mood.emoji}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {mood.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export { MOOD_OPTIONS };
