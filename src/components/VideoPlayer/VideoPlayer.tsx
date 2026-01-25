import { Channels } from "@/app/Types/Channels"

interface VideoPlayerProps {
  currentChannel: Channels | null
}
function VideoPlayer({currentChannel}:VideoPlayerProps) {
  return (
    <div>
      <p className="text-center text-white py-1">{currentChannel?.name}</p>
      <div className="relative w-full pt-[56.25%]">
        <iframe
          src={currentChannel?.iframeSrc}
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          allow="autoplay; encrypted-media"
        />
      </div>

    </div>
  )
}

export default VideoPlayer