import React from "react";
import PeopleStickerCard from "./PeopleStickerCard";

interface PeopleQuoteBlockProps {
  quote: string;
  author: string;
  position: string;
  stickerPosition: "left" | "right";
  stickerColor: string;
  stickerRotation?: string;
  subtractImage: string;
}

const PeopleQuoteBlock: React.FC<PeopleQuoteBlockProps> = ({
  quote,
  author,
  position,
  stickerPosition,
  stickerColor,
  stickerRotation,
  subtractImage,
}) => {
  /**
   * --- Sticker Card (left/right) ---
   */
  const stickerCard = (
    <div className="flex items-center justify-center relative shrink-0 w-[315px] max-md:w-full max-md:max-w-[280px]">
      <PeopleStickerCard backgroundColor={stickerColor} rotation={stickerRotation} subtractImage={subtractImage} />
    </div>
  );

  /**
   * --- Quote Content (paragraphs + author) ---
   * Splits the quote into multiple paragraphs when `\n\n` is used
   */
  const quoteContent = (
    <div className="flex-1 flex items-center max-w-[747px] max-md:w-full">
      <div className="flex flex-col gap-[22px] max-md:gap-4 h-full items-start justify-center w-full">
        {/* Render paragraphs from quote */}
        <div className="font-helvetica text-[20px] max-md:text-[16px] text-text-grey tracking-[-0.4px] leading-[30px] max-md:leading-[24px] w-full">
          {quote.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 max-md:mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author / Position */}
        <div className="flex items-center w-full max-md:justify-center">
          <div
            className="w-36 max-md:w-20 h-[89px] max-md:h-[50px] shrink-0 bg-no-repeat bg-center bg-contain max-md:bg-left"
            style={{
              backgroundImage: "url('/assets/people/pencil.svg')",
            }}
          />
          <div className="font-inter text-[20px] max-md:text-[14px] text-text-grey tracking-[-0.4px] leading-[30px] max-md:leading-[20px] ml-[-68px] max-md:ml-[-30px]">
            - {author} ({position})
          </div>
        </div>
      </div>
    </div>
  );

  /**
   * --- Layout (sticker left or right) ---
   */
  return (
    <div className="flex gap-[41px] max-md:gap-6 items-start max-md:items-center justify-start max-w-[1102px] mx-auto px-4 max-md:flex-col">
      {stickerPosition === "left" ? (
        <>
          <div className="max-md:order-1">{stickerCard}</div>
          <div className="max-md:order-2">{quoteContent}</div>
        </>
      ) : (
        <>
          <div className="max-md:order-2">{quoteContent}</div>
          <div className="max-md:order-1">{stickerCard}</div>
        </>
      )}
    </div>
  );
};

export default PeopleQuoteBlock;
