import { useState } from "react";
import Welcome from "@/components/Welcome";
import Home from "./Home";

export default function Onboarding() {
  const [hasStarted, setHasStarted] = useState(false);

  if (hasStarted) {
    return <Home />;
  }

  return <Welcome onGetStarted={() => setHasStarted(true)} />;
}
