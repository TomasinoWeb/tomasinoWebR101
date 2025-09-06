import React from "react";

const PeopleHeroSection: React.FC = () => {
  return (
    <section className="relative py-[50px] max-md:py-[30px]">
      {/* Hero content */}
      <div className="max-w-[931px] mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6 max-md:gap-4">
          <div className="relative inline-block">
            {/* Outline text */}
            <h1
              className="font-snoopy text-[96px] max-lg:text-[64px] max-md:text-[48px] leading-normal absolute top-0 left-0"
              style={{
                color: "transparent",
                WebkitTextStroke: "10px #1e1e1e", // Black outline
                textShadow: "4px 4px 0 #000000", // Optional shadow
              }}
            >
              THE PEOPLE
            </h1>

            {/* Filled text */}
            <h1
              className="font-snoopy text-[96px] max-lg:text-[64px] max-md:text-[48px] leading-normal relative text-[#fbf9f4]"
              style={{
                textShadow: `
                  -2px 4px 0 #1e1e1e,
                  -4px 6px 0 #1e1e1e,
                  -6px 9px 0 rgba(30, 30, 30, 0.3)
                `,
              }}
            >
              THE PEOPLE
            </h1>
          </div>

          <div className="font-helvetica text-[20px] max-md:text-[16px] text-dark-grey tracking-[-0.4px] leading-[1.2] max-w-full max-md:px-2">
            <p className="mb-0">Behind every brilliant idea, fun design, and witty caption is a bunch of dreamers </p>
            <p className="mb-0">
              with big hearts and bigger imaginations. Say hello to the lovable cast behind our little universe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleHeroSection;
