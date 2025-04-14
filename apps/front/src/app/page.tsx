import Img from "@/components/Image/Img";
import Keen_Slider from "@/components/keen-slider/keenSlider";
import News from "@/components/news/news";
import Testimonial from "@/components/testimonial/testimonial";
import TrandingPoduct from "@/components/tranding_product/tranding.poduct";
import TTService from "@/components/ttService/TTService";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* <Img src="/images/art2.webp" className="w-[400px] h-[400px] my-40" /> */}
      <Keen_Slider />
      <TTService />
      <Testimonial />
      <TrandingPoduct />
      <News />

    </div>
  );
}
