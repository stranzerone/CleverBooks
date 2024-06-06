import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";
import QuestionsPage from "./components/Questions";
import ScrollIndicatorPage from "./components/Statistics";
import Founder from "./components/Founder"
import NewPage from "./components/SpreedSheet";
import CarouselPage from "./components/Carousalpage";
import FounderPage from "./components/FoundersPage";
import CrestBlogPage from "./components/Crestpage";
import GetStartedPage from "./components/GetStarted";
import FooterPage from "./components/FooterPage";

function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
    <Navbar />
    <HeroPage />
    <QuestionsPage />
    <ScrollIndicatorPage />
    <Founder />
    <NewPage />
    <CarouselPage />
    <FounderPage/>
    <CrestBlogPage />
    <GetStartedPage/>
    <FooterPage />
    </div>
  );
}

export default App;
