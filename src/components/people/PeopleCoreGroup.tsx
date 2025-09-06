import React from "react";

const PeopleCoreGroup: React.FC = () => {
  const coreMembers = [
    { id: 0, width: 160, color: "bg-[#5a7db8]" }, // Blue
    { id: 1, width: 159, color: "bg-[#5a7db8]" }, // Blue
    { id: 2, width: 160, color: "bg-[#f4c430]" }, // Yellow
    { id: 3, width: 160, color: "bg-[#f4c430]" }, // Yellow
    { id: 4, width: 160, color: "bg-[#e8a87c]" }, // Orange
    { id: 5, width: 160, color: "bg-[#e8a87c]" }, // Orange
    { id: 6, width: 160, color: "bg-[#d73527]" }, // Red
    { id: 7, width: 159, color: "bg-[#d73527]" }, // Red
    { id: 8, width: 161, color: "bg-[#87ceeb]" }, // Light Blue
  ];

  return (
    <section className="py-[50px] max-md:py-[30px]">
      <div className="flex flex-col items-center max-md:px-4">
        {/* Section header */}
        <div className="text-center mb-[50px] max-md:mb-[30px] max-w-[1076px]">
          <h2 className="font-snoopy text-[64px] max-md:text-[36px] text-black tracking-[-1.4px] leading-normal mb-2">
            The Core Group
          </h2>
          <p className="font-helvetica text-[24px] max-md:text-[18px] text-black tracking-[-0.53px] leading-normal">
            The heads of TomasinoWeb
          </p>
        </div>

        {/* Core group members */}
        <div className="w-full max-w-[1440px] bg-white shadow-[-4px_4px_4px_0px_rgba(30,30,30,0.25)] border-b-[3px] border-black max-md:overflow-x-auto">
          <div className="flex items-start overflow-hidden max-md:min-w-[1440px]">
            {coreMembers.map((member) => (
              <div
                key={member.id}
                className={`${member.color} h-96 max-md:h-64 relative flex-shrink-0`}
                style={{ width: `${member.width}px` }}
              >
                <div className="h-96 max-md:h-64 overflow-hidden relative w-full">
                  {/* Line pattern background */}
                  <div className="absolute left-0 top-0 w-40 max-md:w-32 h-[377px] max-md:h-[250px]">
                    <img src="/assets/people/notebook.svg" alt="" className="w-full h-full" />
                  </div>

                  {/* Character image */}
                  <div className="absolute left-[-2px] top-[35px] max-md:top-[20px] w-[225px] max-md:w-[180px] h-[432px] max-md:h-[280px] rotate-[-8deg] scale-[1.10] max-md:scale-[0.9]">
                    <img
                      src="/assets/people/character.svg"
                      alt="Core member"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Right border for separation */}
                {member.id < coreMembers.length && <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-black" />}
              </div>
            ))}
          </div>

          {/* Bottom border */}
          <div className="absolute border-[#1e1e1e] border-[0px_0px_3px] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default PeopleCoreGroup;
