import type { FC } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";

export const metadata: Metadata = {
  title: "Kyrox - About Us",
  description: "About the origins of the Kyrox minecraft server and time line.",
};

const AboutUs: FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-24 px-4 scroll-smooth">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-minecraftia mb-20">
          <TextGenerateEffect words={"Our Journey"} />
        </h1>

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {/* Item #1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900 dark:text-white">
                  Server Launch
                </div>
                <time className="font-medium text-indigo-500">4/26/2025</time>
              </div>
              <div className="text-slate-500 dark:text-slate-400">
                The server was originally called ReplaySMP, named after the
                founder Replay. It was a mostly vanilla Fabric 1.21.5 server
                hosted on Aternos. Key members included RSiphon (former admin,
                later moderator), furiousegamer589 (important admin),
                NotTalkable, and Vortex. We briefly used a mod called Powers for
                custom abilities but removed it due to performance issues.
                Eventually, we felt it was time for a big change.
              </div>
              <div className="mt-4 rounded-md overflow-hidden">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/timeline/archives-spawn.png"
                        alt="Server Launch"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/timeline/archives-powers.png"
                        alt="Server Powers Mod"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="!block !-left-4 bg-white/80 hover:bg-white" />
                  <CarouselNext className="!block !-right-4 bg-white/80 hover:bg-white" />
                </Carousel>
              </div>
            </div>
          </div>

          {/* Item #2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900 dark:text-white">
                  First Major Update
                </div>
                <time className="font-medium text-indigo-500">09/10/2021</time>
              </div>
              <div className="text-slate-500 dark:text-slate-400">
                Introduced custom enchantments, unique items, and expanded the
                world map with new biomes and exploration opportunities.
              </div>
              <div className="mt-4 rounded-md overflow-hidden">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/timeline/archives-spawn.png"
                        alt="First Major Update"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/timeline/archives-spawn.png"
                        alt="Custom Enchantments"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="!block !-left-4 bg-white/80 hover:bg-white" />
                  <CarouselNext className="!block !-right-4 bg-white/80 hover:bg-white" />
                </Carousel>
              </div>
            </div>
          </div>

          {/* Item #3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900 dark:text-white">
                  Community Milestone
                </div>
                <time className="font-medium text-indigo-500">01/22/2022</time>
              </div>
              <div className="text-slate-500 dark:text-slate-400">
                Reached 1,000 active players and celebrated with a server-wide
                event featuring special rewards and limited-time challenges.
              </div>
              <div className="mt-4 rounded-md overflow-hidden">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/timeline/archives-spawn.png"
                        alt="Community Milestone"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/timeline/archives-spawn.png"
                        alt="Community Event"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="!block !-left-4 bg-white/80 hover:bg-white" />
                  <CarouselNext className="!block !-right-4 bg-white/80 hover:bg-white" />
                </Carousel>
              </div>
            </div>
          </div>

          {/* Item #4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900 dark:text-white">
                  Voice Chat Integration
                </div>
                <time className="font-medium text-indigo-500">05/30/2022</time>
              </div>
              <div className="text-slate-500 dark:text-slate-400">
                Implemented proximity voice chat system, allowing players to
                communicate naturally within the game world based on their
                in-game location.
              </div>
              <div className="mt-4 rounded-md overflow-hidden">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/resources/voice/player-icons.webp"
                        alt="Voice Chat Integration"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/resources/voice/icons.webp"
                        alt="Voice Chat Icons"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/resources/voice/settings.webp"
                        alt="Voice Chat Settings"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="!block !-left-4 bg-white/80 hover:bg-white" />
                  <CarouselNext className="!block !-right-4 bg-white/80 hover:bg-white" />
                </Carousel>
              </div>
            </div>
          </div>

          {/* Item #5 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900 dark:text-white">
                  Dynamic Lighting System
                </div>
                <time className="font-medium text-indigo-500">11/15/2022</time>
              </div>
              <div className="text-slate-500 dark:text-slate-400">
                Released our custom dynamic lighting system, enhancing gameplay
                with realistic light sources and improved visual experience.
              </div>
              <div className="mt-4 rounded-md overflow-hidden">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/resources/dynamic-light/e34f7e148ad616695d3a5a92cf46a7314d7aaf3c.webp"
                        alt="Dynamic Lighting System"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/resources/dynamic-light/d6a430b85d60290abc46ba6e317c7323531b892f.webp"
                        alt="Dynamic Lighting Example"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/resources/dynamic-light/8fa8259fbe7033c335be97a191aec7a0d1f1b83c.webp"
                        alt="Dynamic Lighting Showcase"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="!block !-left-4 bg-white/80 hover:bg-white" />
                  <CarouselNext className="!block !-right-4 bg-white/80 hover:bg-white" />
                </Carousel>
              </div>
            </div>
          </div>

          {/* Item #6 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
              </svg>
            </div>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900 dark:text-white">
                  Future Expansion
                </div>
                <time className="font-medium text-amber-500">Coming Soon</time>
              </div>
              <div className="text-slate-500 dark:text-slate-400">
                MASSIVE, yeah no MASSIVE expansion planned with new game modes,
                custom dimensions, and enhanced server performance for an even
                better gameplay. experience.
              </div>
              <div className="mt-4 rounded-md overflow-hidden">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/blurred.jpg"
                        alt="Future Expansion"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/blurred2.jpg"
                        alt="Future Game Modes"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="!block !-left-4 bg-white/80 hover:bg-white" />
                  <CarouselNext className="!block !-right-4 bg-white/80 hover:bg-white" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
