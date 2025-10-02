import { Button } from "@/components/ui/button";
import welcomeImage from "@assets/generated_images/Calming_wellness_gradient_illustration_fe0b2ea0.png";

interface WelcomeProps {
  onGetStarted: () => void;
}

export default function Welcome({ onGetStarted }: WelcomeProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative h-64 w-full rounded-2xl overflow-hidden">
          <img 
            src={welcomeImage} 
            alt="Calming wellness illustration" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight" data-testid="text-welcome-title">
            Track Your Mood Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto" data-testid="text-welcome-subtitle">
            Understand your emotions better with daily mood tracking and reflections. Build self-awareness one day at a time.
          </p>
        </div>
        
        <Button 
          size="lg" 
          className="w-full max-w-xs mx-auto"
          onClick={onGetStarted}
          data-testid="button-get-started"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
