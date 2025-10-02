import MoodEntryForm from '../MoodEntryForm';

export default function MoodEntryFormExample() {
  return (
    <div className="p-6">
      <MoodEntryForm 
        onSubmit={(mood, note) => {
          console.log('Mood logged:', { mood, note });
        }}
      />
    </div>
  );
}
