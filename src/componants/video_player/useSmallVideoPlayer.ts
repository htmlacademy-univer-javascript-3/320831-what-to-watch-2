import { useState, useEffect } from 'react';

const useSmallVideoPlayer = (videoRef: React.MutableRefObject<HTMLVideoElement | null>) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    let timeoutId: NodeJS.Timeout | undefined;

    if (isHovered) {
      timeoutId = setTimeout(() => {
        if (videoElement) {
          videoElement.play();
        }
      }, 1000);
    } else {
      if(timeoutId !== undefined){
        clearTimeout(timeoutId);
      }
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }

    return () => clearTimeout(timeoutId);
  }, [isHovered, videoRef]);

  return {
    handleMouseEnter,
    handleMouseLeave,
    isHovered
  };
};

export default useSmallVideoPlayer;
