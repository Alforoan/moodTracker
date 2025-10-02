import Welcome from '../Welcome';

export default function WelcomeExample() {
  return <Welcome onGetStarted={() => console.log('Get Started clicked')} />;
}
