"use client";
import type { FC } from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Wifi, WifiOff, Loader2 } from "lucide-react";
import { Button } from "@/components/MovingBorder";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { useEffect, useState } from "react";

interface ServerStatus {
  online: boolean;
  players: {
    now: number;
    max: number;
  };
}

const Home: FC = () => {
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch(
          "https://mcapi.us/server/status?ip=DE3.FreeMinecraftHost.com:29691",
        );
        const data = await response.json();
        setServerStatus({
          online: data.online,
          players: {
            now: data.players?.now || 0,
            max: data.players?.max || 0,
          },
        });
      } catch (error) {
        console.error("Failed to fetch server status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServerStatus();
    // Refresh every 60 seconds
    const interval = setInterval(fetchServerStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container flex h-screen flex-col items-center justify-center text-center">
      <AuroraBackground className="absolute inset-x-0 top-0 -z-50 animate-show" />
      <img
        src="/Kyrox.png"
        alt="KyroxMC Logo"
        className="h-20 sm:h-32 lg:h-40 w-auto animate-show"
      />
      <TextGenerateEffect
        className="relative -mt-2 text-sm font-minecraftia dark:text-zinc-300 sm:text-base"
        words={"in search of the incredible."}
      />
      <div className="mt-10 md:mt-20">
        <a
          href="https://discord.gg/TwEd8RTDyb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center justify-center gap-4 px-6 py-4 text-base sm:text-lg transition-all duration-200 bg-zinc-800 hover:bg-zinc-700 hover:scale-[1.05] hover:shadow-md">
            {/* Left side: Status */}
            <div className="flex items-center gap-2">
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin text-white" />
              ) : serverStatus?.online ? (
                <Wifi className="h-5 w-5 text-green-400" />
              ) : (
                <WifiOff className="h-5 w-5 text-red-400" />
              )}
              {!loading && serverStatus && (
                <span className="text-sm">
                  {serverStatus.players.now}/{serverStatus.players.max}
                </span>
              )}
            </div>

            {/* Separator */}
            <div className="h-5 w-px bg-white/40 shrink-0" />

            {/* Right side: Button label */}
            <span className="whitespace-nowrap text-sm text-white">
              Join the fun
            </span>
          </Button>
        </a>
      </div>
    </main>
  );
};

export default Home;
