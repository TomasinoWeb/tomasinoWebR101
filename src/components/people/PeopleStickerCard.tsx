import React from "react";

interface PeopleStickerCardProps {
  backgroundColor: string;
  rotation?: string;
  subtractImage: string;
}

const PeopleStickerCard: React.FC<PeopleStickerCardProps> = ({
  backgroundColor,
  rotation = "rotate-[352deg]",
  subtractImage,
}) => {
  return (
    <div className={`flex-none ${rotation} max-md:scale-75 max-md:rotate-0`}>
      <div className="relative w-[308px] h-[308px]">
        {/* Card background */}
        <div
          className={`absolute left-[30px] top-[30.5px] w-[247px] h-[248px] ${backgroundColor} border-4 border-cream-light`}
        />

        {/* Pattern overlay */}
        <div className="absolute left-5 top-5 w-[263px] h-[263px] overflow-hidden">
          <div className="absolute left-0 top-0 w-[275px] opacity-60 flex flex-col gap-[5.3px] items-center">
            {/* Repeating pattern lines */}
            {Array.from({ length: 13 }, (_, i) => (
              <div key={i} className="h-3.5 relative shrink-0">
                <img
                  src={i % 2 === 0 ? "/assets/people/circler.svg" : "/assets/people/circler2.svg"}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Character image */}
        <div className="absolute left-[59px] top-[70px] w-[192px] h-[232px] overflow-hidden rotate-[-10deg]">
          <img
            src="/assets/people/character.svg"
            alt="Character"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Subtract overlay */}
        <div className="absolute left-0 top-0 w-[308px] h-[308px]">
          <img src={subtractImage} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default PeopleStickerCard;
