import Navbar from "../components/Navbar";

import FeelAskCardsSection from "./FeelAskCardsSection";
import FeelAwsnerCardsSection from "./FeelAwsnerCardsSection";
import HelpCardsSection from "./HelpCardsSection";
import MethodStepsSection from "./MethodStepsSection";
import ThumbVideoSection from "./ThumbVideoSection";
import WelcomeSection from "./WelcomeSection";

export const App = () => (
  <>
    <Navbar />
    <WelcomeSection />
    <ThumbVideoSection />
    <FeelAskCardsSection />
    <FeelAwsnerCardsSection />
    <HelpCardsSection />
    <MethodStepsSection />
  </>
);
