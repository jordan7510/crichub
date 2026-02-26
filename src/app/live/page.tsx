"use client"
import Selector from "@/components/Selector/Selector";
import { useEffect, useState } from "react";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { Channels } from "@/Types/Types";

export default function Live() {
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
          setCurrentChannel(data.iframes[0]);
        }
      } catch (error) {
        console.error("Error fetching channels.", error);
      }
    };

    fetchChannel();
  }, [url]);

  return (
    <main className="min-h-screen flex flex-col px-2 mt-1">

      {/* Video Player section */}
      <div className="md:h-96 md:w-full h-72 w-full rounded-lg mx-auto">
        {
          currentChannel ? (
            <VideoPlayer
              currentChannel={currentChannel}
            />
          ) : (
            <div className="text-white flex items-center justify-center h-64">
              Loading video...
            </div>
          )
        }
      </div>


      {/* LEFT: Channel Selector */}
      <div className="max-w-2xl mx-auto">
        <h2 className="font-semibold text-sm my-2 text-center dak:text-white text-gray-600">
          Select Channel
        </h2>
        <Selector
          channels={channels}
          currentChannel={currentChannel}
          setCurrentChannel={setCurrentChannel}
        />
      </div>

    </main>
  );
}
