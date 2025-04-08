import Keen_Slider from "@/components/keen-slider/keenSlider";
import Navbar from "@/components/nav/navbar";
import TTService from "@/components/ttService/TTService";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Navbar /> */}
      <div className="pt-28 md:pt-56 h-[2000px]">
        <Keen_Slider />
        <TTService />
      </div>
    </div>
  );
}
