import { Channels } from "@/Types/Channels";
import React from "react";

interface SelectorProps {
    channels: Channels[],
    currentChannel: Channels | null,
    setCurrentChannel: React.Dispatch<React.SetStateAction<Channels | null>>
}
export default function Selector({ channels, currentChannel, setCurrentChannel }: SelectorProps) {

    const handleSelect = (selectedId: string) => {
        const selectedChannel = channels.find((ch) => ch.id === selectedId);
        if (selectedChannel) setCurrentChannel(selectedChannel)
    }

    return (
        <div className="flex flex-wrap gap-1 justify-center items-center">
            {
                channels.map((ch) => {
                    const isSelected = ch?.id === currentChannel?.id
                    return (
                        <span
                            key={ch.id}
                            onClick={() => handleSelect(ch.id)}
                            className={` text-gray-200 rounded-md p-1 hover:bg-pink-700 hover:text-white hover:cursor-pointer duration-300 font-medium text-[8px] md:text-[12px] ${isSelected ? "bg-pink-700 text-white" : "bg-gray-700"}`} >
                            {ch?.name}
                        </span>
                    )
                })
            }

        </div>

    );
}
