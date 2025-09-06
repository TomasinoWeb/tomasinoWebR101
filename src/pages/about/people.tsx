import React from "react";
import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import PeopleHeroSection from "../../components/people/PeopleHeroSection";
import PeopleQuoteBlock from "../../components/people/PeopleQuoteBlock";
import PeopleDepartmentGrid from "../../components/people/PeopleDepartmentGrid";
import PeoplePhotoCollage from "../../components/people/PeoplePhotoCollage";
import PeopleCoreGroup from "../../components/people/PeopleCoreGroup";
import PeopleCallToAction from "../../components/people/PeopleCallToAction";
import PeopleComicsSection from "../../components/people/PeopleComicsSection";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "subtle",

    children: (
      <div className="bg-cream relative min-h-screen w-full overflow-x-hidden">
        {/* Content wrapper with screentone overlay */}
        <div className="relative">
          {/* Screentone overlay for content area only */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{
              backgroundImage: "url('/assets/people/background.svg')",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Hero Section */}
            <PeopleHeroSection />

            {/* First Quote Block */}
            <div className="py-[50px] max-md:py-[30px]">
              <PeopleQuoteBlock
                quote={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                author="Lorem Ipsum"
                position="President, PY 2022 – 2024"
                stickerPosition="left"
                stickerColor="bg-[#e4bc04]"
                stickerRotation="rotate-[352deg]"
                subtractImage="/assets/people/frame.svg"
              />
            </div>

            {/* Department Grid */}
            <PeopleDepartmentGrid />

            {/* Innovation Quote Section */}
            <div className="py-[50px] max-md:py-[30px]">
              <div className="max-w-[1296px] mx-auto text-center px-4">
                <h2 className="font-snoopy text-[64px] max-md:text-[36px] text-text-grey tracking-[-1.4px] leading-normal mb-[50px] max-md:mb-[30px] whitespace-nowrap max-md:whitespace-normal">
                  16 years of innovation, passion, and dedication
                </h2>
                <br className="max-md:hidden" />
                <br className="max-md:hidden" />

                <PeopleQuoteBlock
                  quote={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
                  author="Lorem Ipsum"
                  position="President, PY 2022 – 2024"
                  stickerPosition="right"
                  stickerColor="bg-[#728cc7]"
                  stickerRotation="rotate-[8deg]"
                  subtractImage="/assets/people/frame.svg"
                />
              </div>
            </div>

            {/* Photo Collage */}
            <PeoplePhotoCollage />

            <br />
            <br />

            {/* Another Quote Block */}
            <div className="py-[50px] max-md:py-[30px]">
              <PeopleQuoteBlock
                quote={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                author="Lorem Ipsum"
                position="President, PY 2022 – 2024"
                stickerPosition="left"
                stickerColor="bg-[#e4bc04]"
                stickerRotation="rotate-[352deg]"
                subtractImage="/assets/people/frame.svg"
              />
            </div>

            {/* Comics Section */}
            <PeopleComicsSection />

            {/* Core Group */}
            <PeopleCoreGroup />

            {/* 12 Months Section */}
            <div className="bg-grey-light py-[100px] max-md:py-[50px] relative">
              {/* Background pattern */}
              <div className="absolute inset-0">
                <img src="/assets/people/notebookbig.svg" alt="" className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10 max-w-[1102px] mx-auto flex flex-col items-center gap-[50px] max-md:gap-[30px] px-4">
                <div className="text-center text-black">
                  <h2 className="font-snoopy text-[64px] max-md:text-[36px] tracking-[-1.4px] leading-normal mb-4">
                    12 Months
                  </h2>
                  <p className="font-helvetica text-[24px] max-md:text-[16px] tracking-[-0.53px] leading-normal max-w-[1076px]">
                    of a challenging yet dynamic publication year
                  </p>
                </div>

                <div className="flex flex-col gap-20 w-full">
                  <PeopleQuoteBlock
                    quote={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                    author="Lorem Ipsum"
                    position="President, PY 2022 – 2024"
                    stickerPosition="left"
                    stickerColor="bg-[#e4bc04]"
                    stickerRotation="rotate-[352deg]"
                    subtractImage="/assets/people/frame.svg"
                  />

                  <PeopleQuoteBlock
                    quote={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
                    author="Lorem Ipsum"
                    position="President, PY 2022 – 2024"
                    stickerPosition="right"
                    stickerColor="bg-[#728cc7]"
                    stickerRotation="rotate-[8deg]"
                    subtractImage="/assets/people/frame.svg"
                  />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <PeopleCallToAction />
          </div>
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
