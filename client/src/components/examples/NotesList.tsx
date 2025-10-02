import NotesList from '../NotesList';

export default function NotesListExample() {
  const mockNotes = [
    {
      id: '1',
      date: 'Today, 3:42 PM',
      mood: 'great',
      moodEmoji: '😊',
      moodColor: 'hsl(145 60% 50%)',
      note: 'Had an amazing day! Finally finished that project I was working on. Feeling accomplished and energized.',
    },
    {
      id: '2',
      date: 'Yesterday, 5:15 PM',
      mood: 'anxious',
      moodEmoji: '😰',
      moodColor: 'hsl(280 50% 60%)',
      note: 'Feeling a bit overwhelmed with everything on my plate. Need to take things one step at a time.',
    },
    {
      id: '3',
      date: 'Dec 29, 2:30 PM',
      mood: 'calm',
      moodEmoji: '😌',
      moodColor: 'hsl(180 45% 55%)',
      note: 'Spent some quiet time reading today. It really helped me relax and reset.',
    },
  ];

  return (
    <div className="p-6">
      <NotesList notes={mockNotes} />
    </div>
  );
}
