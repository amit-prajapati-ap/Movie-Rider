import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { BlurCircle, MovieCard } from "..";
import { dummyShowsData } from "@/assets/assets";
import Autoplay from "embla-carousel-autoplay";

export function FeaturedSection() {
  const navigate = useNavigate();
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      direction: "forward",
      jumpTo: "start",
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurCircle top="0" right="-80px" />
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <Button
          onClick={() => navigate("/movies")}
          className={"group text-gray-300 bg-transparent hover:bg-transparent"}
        >
          View All{" "}
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" />
        </Button>
      </div>

      <div className="flex justify-center xs:mx-10 md:mx-0 max-xs:mx-1.5">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
          className="w-full sm:max-w-[1200px] md:max-w-xl lg:max-w-4xl xl:max-w-6xl"
        >
          <CarouselContent className="-ml-1">
            {dummyShowsData.slice(0, 6).map((show, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:basis-1/2 xl:basis-1/4 lg:basis-1/3"
              >
                <MovieCard movie={show} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={
              "bg-primary-light hover:bg-primary-dull text-white border border-gray-700"
            }
          />
          <CarouselNext
            className={
              "bg-primary-light hover:bg-primary-dull text-white border border-gray-700"
            }
          />
        </Carousel>
      </div>

      <div className="flex justify-center mt-20">
        <Button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className={"bg-primary-light hover:bg-primary-dull"}
        >
          Show more
        </Button>
      </div>
    </div>
  );
}

export default FeaturedSection;
