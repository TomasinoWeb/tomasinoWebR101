import React from "react";

interface PeopleDepartmentCardProps {
  backgroundColor: string;
  position?: { x: number; y: number };
}

const PeopleDepartmentCard: React.FC<PeopleDepartmentCardProps> = ({ backgroundColor, position = { x: 0, y: 0 } }) => {
  return (
    <div
      className={`absolute w-[215px] h-[215px] ${backgroundColor} border-[2px] border-black`}
      style={{
        marginLeft: `${position.x}px`,
        marginTop: `${position.y}px`,
      }}
    >
      <div className="relative w-[215px] h-[215px] overflow-hidden">
        {/* Pattern background */}
        <div className="absolute left-0 top-4 w-[215px] h-[207px]">
          <img src="/assets/people/notebook2.svg" alt="" className="w-full h-full" />
        </div>

        {/* Character image */}
        <div
          className="absolute left-10 top-[34px] w-[140px] h-[180px] bg-no-repeat bg-[53.31%_30.59%] bg-[255.32%_141.58%]"
          style={{
            backgroundImage: "url('/assets/people/character.svg')",
          }}
        />

        {/* TW badge */}
        <div className="absolute left-[11px] top-[183px] w-[79px] h-[24px] flex gap-1 items-center justify-center overflow-hidden">
          <div className="font-helvetica text-[10px] text-black flex items-center">Ⓣ</div>
          <div className="font-helvetica text-[12px] text-black h-[16px] flex items-center">TW</div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDepartmentCard;
