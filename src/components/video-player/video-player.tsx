import { useRef, FC, memo } from 'react';

interface IVideoPlayerProps {
  videoUrl: string;
  previewImageUrl: string;
  isPlaying: boolean;
}
const VideoPlayer: FC<IVideoPlayerProps> = ({ videoUrl, previewImageUrl, isPlaying }) => {
  const videoRef = useRef(null);

  return (
    <div>
      {isPlaying ? (
        <video ref={videoRef} src={videoUrl} autoPlay loop muted width="280" height="175" />
      ) : (
        <img src={previewImageUrl} alt="Preview" width="280" height="175" />
      )}
    </div>
  );
};

export const VideoPlayerMemo = memo(VideoPlayer);
