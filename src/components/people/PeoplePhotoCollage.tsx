import React, { useState } from "react";

const PeoplePhotoCollage: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    {
      src: "/assets/people/photo.png",
      alt: "Team member with camera",
    },
    {
      src: "/assets/people/awards.jpg",
      alt: "Awards and workspace",
    },
    {
      src: "/assets/people/tomwebgirl.jpg",
      alt: "Team member reading",
    },
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index: number) => {
    setCurrentPhoto(index);
  };

  return (
    <section className="py-[50px] max-md:py-[30px]">
      <div className="max-w-[1296px] mx-auto px-[72px] max-md:px-4">
        <div
          className="relative w-full h-[506px] max-md:h-[400px] border-8 max-md:border-4 border-black shadow-[-8px_8px_0px_0px_#1e1e1e] max-md:shadow-[-4px_4px_0px_0px_#1e1e1e]"
          style={{
            backgroundImage: "url('/assets/people/background.svg')",
            backgroundSize: "1024px 1024px",
            backgroundPosition: "top left",
            backgroundRepeat: "repeat",
          }}
        >
          {/* Desktop: Three photo panels in horizontal row */}
          <div className="hidden md:flex h-full">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`flex-1 h-full overflow-hidden ${
                  index < photos.length - 1 ? "border-r-2 border-cream-light" : ""
                }`}
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Mobile: Swipeable gallery */}
          <div className="md:hidden relative h-full overflow-hidden">
            {/* Photo container with swipe gestures */}
            <div
              className="flex h-full transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentPhoto * 100}%)` }}
              onTouchStart={(e) => {
                const startX = e.touches[0].clientX;
                const handleTouchMove = (moveEvent: TouchEvent) => {
                  const currentX = moveEvent.touches[0].clientX;
                  const diff = startX - currentX;

                  if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                      nextPhoto();
                    } else {
                      prevPhoto();
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
              {photos.map((photo, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                  {/* Subtle edge hints for swipe discovery */}
                  {currentPhoto > 0 && index === currentPhoto && (
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-r from-white/30 to-transparent pointer-events-none" />
                  )}
                  {currentPhoto < photos.length - 1 && index === currentPhoto && (
                    <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-l from-white/30 to-transparent pointer-events-none" />
                  )}
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPhoto(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentPhoto === index ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeoplePhotoCollage;
