import { useState } from 'react';
import MoodPicker from '../MoodPicker';

export default function MoodPickerExample() {
  const [selectedMood, setSelectedMood] = useState<string>();
  
  return (
    <div className="p-6">
      <MoodPicker 
        selectedMood={selectedMood}
        onMoodSelect={(mood) => {
          setSelectedMood(mood.value);
          console.log('Mood selected:', mood);
        }}
      />
    </div>
  );
}
