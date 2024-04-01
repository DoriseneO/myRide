import HowItWorks from "../../components/HowItWorks/HowItWorks";
import HeroSection from "../../components/herosection/HeroSection";
import ChooseUs from "../../components/chooseus/ChooseUs";
import Review from "../../components/Review/Revew";
export default function Home() {
  return (
    <div className="w-[100%] flex justify-center items-center ">
      <div className="w-[85%] ">
        <HeroSection />
        <br />
        <HowItWorks />

        <ChooseUs />

        <Review />
        <br />
      </div>
    </div>
  );
}
