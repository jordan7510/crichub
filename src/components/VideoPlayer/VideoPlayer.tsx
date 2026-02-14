import { Channels } from "../../Types/Channels"

interface VideoPlayerProps {
  currentChannel: Channels | null
}
function VideoPlayer({ currentChannel }: VideoPlayerProps) {
  return (
    <div className=" h-full w-full aspect-video">
      <iframe
        src={currentChannel?.iframeSrc}
        key={currentChannel?.iframeSrc}
        className="w-full h-full"
        allowFullScreen
        allow="autoplay; encrypted-media"
      />
    </div>
  )
}

export default VideoPlayer