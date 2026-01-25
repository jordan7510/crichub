import { Channels } from "@/app/Types/Channels";
import React from "react";

interface SelectorProps {
    channels: Channels[],
    currentChannel: Channels | null,
    setCurrentChannel: React.Dispatch<React.SetStateAction<Channels | null>>
}
export default function Selector({ channels, currentChannel, setCurrentChannel }: SelectorProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        const selectedChannel = channels.find((ch) => ch.id === selectedId);
        if (selectedChannel) setCurrentChannel(selectedChannel)
    }

    return (
        <select
            className=" bg-black text-white border rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={currentChannel?.id}
            onChange={handleChange}
        >
            {channels.map((ch) => (
                <option key={ch?.id} value={ch?.id}>
                    {ch?.name}
                </option>
            ))}
        </select>
    );
}
