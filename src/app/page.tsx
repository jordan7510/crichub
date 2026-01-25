"use client"
import Selector from "@/components/Selector/Selector";
import { useEffect, useState } from "react";
import { Channels } from "./Types/Channels";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

export default function Home() {
  const url = process.env.NEXT_PUBLIC_LINK;
  const [channels, setChannels] = useState<Channels[]>([]);
  const [currentChannel, setCurrentChannel] = useState<Channels | null>(null);

  useEffect(() => {
    const fetchChannel = async () => {
      if (!url) return;
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data?.iframes?.length > 0) {
          setChannels(data.iframes);
          setCurrentChannel(data.iframes[2]);
        }
      } catch (error) {
        console.error("Error fetching channels.", error);
      }
    };

    fetchChannel();
  }, [url]);

  return (
    <div className="h-screen w-screen flex justify-center bg-black">
      <div className="flex flex-col items-center ">
        <div className="mt-2 mb-4 py-2">
          <p className="font-extrabold text-3xl text-white ">CRIC-HUB</p>
        </div>
        <div className="border  py-12 px-6 rounded">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* LEFT: Channel Selector */}
            <div className="md:col-span-3 rounded-lg shadow p-4 overflow-hidden">
              <h2 className="font-semibold mb-2 text-center text-white">
                Select Channel
              </h2>
              <Selector
                channels={channels}
                currentChannel={currentChannel}
                setCurrentChannel={setCurrentChannel}
              />
            </div>

            {/* RIGHT: Video Player */}
            {
              currentChannel ? (
                <div className="border border-gray-400 md:col-span-9 rounded-lg overflow-hidden shadow">
                  <VideoPlayer
                    currentChannel={currentChannel}
                  />
                </div>
              ) : (
                <div className="text-white flex items-center justify-center h-64">
                  Loading video...
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
