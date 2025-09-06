import React, { useState } from "react";

const PeopleComicsSection: React.FC = () => {
  const [currentComic, setCurrentComic] = useState(0);

  const comics = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: `Comic ${i + 1}`,
    // Add actual comic images here when available
    // src: `/assets/people/comic-${i + 1}.jpg`,
  }));

  const nextComic = () => {
    setCurrentComic((prev) => (prev + 1) % comics.length);
  };

  const prevComic = () => {
    setCurrentComic((prev) => (prev - 1 + comics.length) % comics.length);
  };

  const goToComic = (index: number) => {
    setCurrentComic(index);
  };

  return (
    <section className="py-[100px] max-md:py-[50px]">
      <div className="max-w-[1296px] mx-auto px-[72px] max-md:px-4">
        <div className="flex flex-col gap-5">
          <p className="font-groundnut text-[24px] max-md:text-[18px] text-text-grey tracking-[-0.53px] leading-normal max-md:text-center">
            THIS COMICS IS PRESENTED TO YOU BY ...
          </p>

          {/* Desktop: Horizontal row of comics */}
          <div className="hidden md:flex gap-8 items-center w-full justify-center max-lg:overflow-x-auto max-lg:justify-start">
            {comics.map((comic, i) => (
              <div
                key={i}
                className="bg-cream-light w-[306px] h-[271px] border-[3px] border-solid border-[#1e1e1e] shadow-[-4px_4px_0px_0px_#1e1e1e] flex-shrink-0 flex items-center justify-center"
              >
                <span className="text-black font-helvetica text-lg font-medium">{comic.title}</span>
              </div>
            ))}
          </div>

          {/* Mobile: Swipeable gallery */}
          <div className="md:hidden relative">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentComic * 100}%)` }}
              onTouchStart={(e) => {
                const startX = e.touches[0].clientX;
                const handleTouchMove = (moveEvent: TouchEvent) => {
                  const currentX = moveEvent.touches[0].clientX;
                  const diff = startX - currentX;

                  if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                      nextComic();
                    } else {
                      prevComic();
                    }
                    document.removeEventListener("touchmove", handleTouchMove);
                  }
                };

                document.addEventListener("touchmove", handleTouchMove);
                document.addEventListener(
                  "touchend",
                  () => {
                    document.removeEventListener("touchmove", handleTouchMove);
                  },
                  { once: true }
                );
              }}
            >
              {comics.map((comic, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4 first:pl-0 last:pr-0">
                  <div className="bg-cream-light w-full max-w-[280px] mx-auto h-[240px] border-[3px] border-solid border-[#1e1e1e] shadow-[-4px_4px_0px_0px_#1e1e1e] flex items-center justify-center relative">
                    <span className="text-black font-helvetica text-base font-medium">{comic.title}</span>

                    {/* Subtle edge hints for swipe discovery */}
                    {currentComic > 0 && i === currentComic && (
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                    )}
                    {currentComic < comics.length - 1 && i === currentComic && (
                      <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {comics.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToComic(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentComic === index ? "bg-text-grey" : "bg-text-grey/30"
                  }`}
                  aria-label={`Go to comic ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleComicsSection;
