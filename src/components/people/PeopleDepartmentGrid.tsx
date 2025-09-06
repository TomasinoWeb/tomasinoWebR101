import React from "react";

const PeopleDepartmentGrid: React.FC = () => {
  const departments = [
    { color: "bg-[#728cc7]", gridArea: "1 / 1" },
    { color: "bg-[#ffd400]", gridArea: "1 / 2" },
    { color: "bg-[#fac170]", gridArea: "1 / 3" },
    { color: "bg-[#e95412]", gridArea: "1 / 4" },
    { color: "bg-[#60b0e3]", gridArea: "1 / 5" },
    { color: "bg-[#fcebd1]", gridArea: "2 / 1" },
    { color: "bg-[#3aaa9a]", gridArea: "2 / 2" },
    { color: "bg-[#728cc7]", gridArea: "2 / 3" },
    { color: "bg-[#ffd400]", gridArea: "2 / 4" },
    { color: "bg-[#fac170]", gridArea: "2 / 5" },
  ];

  return (
    <section className="py-[50px] max-md:py-[30px]">
      <div className="max-w-[1296px] mx-auto px-[72px] max-md:px-4">
        {/* Section header */}
        <div className="flex flex-col gap-8 max-md:gap-6 items-center mb-8 max-md:mb-6">
          <div className="flex flex-col gap-2 items-start max-md:items-center text-text-grey w-full max-w-[1076px]">
            <div className="flex max-md:flex-col gap-3 max-md:gap-2 items-center">
              <h2 className="font-snoopy text-[64px] max-md:text-[36px] tracking-[-1.4px] leading-normal whitespace-nowrap max-md:text-center">
                59 TOMWEBBERS
              </h2>
              <span className="font-helvetica italic text-[24px] max-md:text-[18px] tracking-[-0.53px] leading-normal whitespace-nowrap">
                and counting!
              </span>
            </div>
            <p className="font-helvetica text-[24px] max-md:text-[16px] tracking-[-0.53px] leading-normal max-md:text-center">
              We're a bunch of sleep-deprived yet ambitious undergrads from different colleges and faculties.
            </p>
          </div>

          {/* Department grid */}
          <div className="grid grid-cols-5 max-md:grid-cols-2 grid-rows-2 max-md:grid-rows-5 gap-2 w-fit mx-auto">
            {departments.map((dept, index) => (
              <div
                key={index}
                className={`${dept.color} w-[215px] max-md:w-[150px] h-[215px] max-md:h-[150px] border-[2px] border-black relative overflow-hidden flex-shrink-0`}
                style={{ gridArea: dept.gridArea }}
                data-grid-area={dept.gridArea}
              >
                {/* Pattern background */}
                <div className="absolute left-0 top-4 max-md:top-2 w-[215px] max-md:w-[150px] h-[207px] max-md:h-[140px]">
                  <img src="/assets/people/notebook2.svg" alt="" className="w-full h-full" />
                </div>

                {/* Character image */}
                <div className="absolute left-10 max-md:left-6 top-[45px] max-md:top-[30px] w-[140px] max-md:w-[100px] h-[180px] max-md:h-[120px] overflow-hidden rotate-[-10deg]">
                  <img
                    src="/assets/people/character.svg"
                    alt="Team member"
                    className="w-[180px] max-md:w-[120px] h-full object-cover object-top scale-110"
                    style={{
                      marginLeft: "-0px",
                      imageRendering: "crisp-edges",
                    }}
                  />
                </div>

                {/* TW badge */}
                <div className="absolute left-[8px] max-md:left-[6px] top-[183px] max-md:top-[125px] w-[79px] max-md:w-[60px] h-[24px] max-md:h-[18px] flex gap-1 items-center overflow-hidden">
                  <div className="font-helvetica text-[10px] max-md:text-[8px] text-black flex items-center scale-75">
                    Ⓣ
                  </div>
                  <div className="font-helvetica text-[12px] max-md:text-[10px] text-black h-[16px] max-md:h-[12px] flex items-center">
                    TW
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleDepartmentGrid;
