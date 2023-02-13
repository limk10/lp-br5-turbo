import Navbar from "../components/Navbar";
import CompanyPresentationSection from "./CompanyPresentationSection";
import ContactUsSection from "./ContactUsSection";

import FeelAskCardsSection from "./FeelAskCardsSection";
import FeelAwsnerCardsSection from "./FeelAwsnerCardsSection";
import HelpCardsSection from "./HelpCardsSection";
import MentorsSection from "./MentorsSection";
import MethodStepsSection from "./MethodStepsSection";
import ServicesPresentationSection from "./ServicesPresentationSection";
import ShowcaseSection from "./ShowcaseSection";
import ThumbVideoSection from "./ThumbVideoSection";
import WelcomeSection from "./WelcomeSection";

export const App = () => (
  <>
    <Navbar />
    <FeelAwsnerCardsSection />
    <FeelAskCardsSection />
    <ThumbVideoSection />
    <WelcomeSection />

    <HelpCardsSection />
    <MethodStepsSection />
    <CompanyPresentationSection />
    <ServicesPresentationSection />
    <ShowcaseSection />
    <MentorsSection />
    <ContactUsSection />
  </>
);
