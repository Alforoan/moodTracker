import WeeklyGraph from '../WeeklyGraph';

export default function WeeklyGraphExample() {
  const mockData = [
    { date: 'Mon', mood: 'great', moodLabel: 'Great', moodEmoji: '😊', moodColor: 'hsl(145 60% 50%)', value: 5 },
    { date: 'Tue', mood: 'good', moodLabel: 'Good', moodEmoji: '🙂', moodColor: 'hsl(140 50% 55%)', value: 4 },
    { date: 'Wed', mood: 'okay', moodLabel: 'Okay', moodEmoji: '😐', moodColor: 'hsl(45 75% 60%)', value: 3 },
    { date: 'Thu', mood: 'anxious', moodLabel: 'Anxious', moodEmoji: '😰', moodColor: 'hsl(280 50% 60%)', value: 2 },
    { date: 'Fri', mood: 'calm', moodLabel: 'Calm', moodEmoji: '😌', moodColor: 'hsl(180 45% 55%)', value: 4 },
    { date: 'Sat', mood: 'great', moodLabel: 'Great', moodEmoji: '😊', moodColor: 'hsl(145 60% 50%)', value: 5 },
    { date: 'Sun', mood: 'good', moodLabel: 'Good', moodEmoji: '🙂', moodColor: 'hsl(140 50% 55%)', value: 4 },
  ];

  return (
    <div className="p-6">
      <WeeklyGraph data={mockData} />
    </div>
  );
}
