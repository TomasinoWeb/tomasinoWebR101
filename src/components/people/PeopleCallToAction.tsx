import React from "react";

const PeopleCallToAction: React.FC = () => {
  return (
    <section className="relative w-full h-[820px] max-md:h-[500px] overflow-hidden">
      {/* Background SVG - using the existing calltoaction.svg */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/people/calltoaction.svg')",
        }}
      />

      {/* Main Content Card - positioned to match Figma design */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-md:px-4">
        <div className="bg-[#fbf9f4] border-[3px] border-[#1e1e1e] shadow-[-7px_7px_0px_0px_#1e1e1e] max-md:shadow-[-4px_4px_0px_0px_#1e1e1e] w-[574px] max-md:w-full max-md:max-w-[350px] h-[469px] max-md:h-[380px] relative">
          {/* Inner content area with notebook paper background */}
          <div className="absolute left-0 top-[47px] max-md:top-[30px] w-full h-[422px] max-md:h-[350px] bg-[#fbf9f4] border-[3px] border-[#1e1e1e] flex flex-col items-center justify-center px-6 max-md:px-4 py-8 max-md:py-6 gap-5 max-md:gap-4 relative overflow-hidden">
            {/* Notebook lines background */}
            <div
              className="absolute inset-0 w-full h-full opacity-60"
              style={{
                backgroundImage: "url('/assets/people/notebook2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Content over the notebook lines */}
            <div className="relative z-10 flex flex-col items-center gap-5 max-md:gap-4">
              {/* Text Content */}
              <div className="text-center space-y-5 max-md:space-y-3">
                <p className="text-[20px] max-md:text-[14px] text-[#1e1e1e] font-helvetica tracking-[-0.44px] leading-normal whitespace-nowrap max-md:whitespace-normal max-md:text-center">
                  TomasinoWeb continues to lead and innovate the modern web
                </p>

                <h2 className="text-[64px] max-md:text-[28px] text-[#1e1e1e] font-snoopy tracking-[-1.408px] leading-[55px] max-md:leading-[30px] max-w-[532px] max-md:max-w-[300px]">
                  Are you ready to be part of the Good Ol'Crew?
                </h2>
              </div>

              {/* Button */}
              <div className="flex justify-center mt-5 max-md:mt-3">
                <button className="bg-[#fbf9f4] border-[3.471px] max-md:border-[2px] border-[#1e1e1e] shadow-[-4px_4px_0px_0px_#1e1e1e] max-md:shadow-[-3px_3px_0px_0px_#1e1e1e] w-[222px] max-md:w-[260px] h-[59px] max-md:h-[40px] flex items-center justify-center px-2 py-1 hover:shadow-[-2px_2px_0px_0px_#1e1e1e] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 overflow-hidden">
                  <span className="text-[18px] max-md:text-[12px] text-[#1e1e1e] font-bold leading-[1.1] max-md:leading-[1] text-center max-md:whitespace-nowrap">
                    <span className="max-md:hidden">
                      WHAT'S IT LIKE IN
                      <br />
                      PLANET TOMWEB??
                    </span>
                    <span className="md:hidden">WHAT'S IT LIKE IN PLANET TOMWEB??</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleCallToAction;
