import React from 'react';

interface YouTubeThumbnailProps {
  videoId: string;
}

const YouTubeThumbnail: React.FC<YouTubeThumbnailProps> = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`;

  return (
    <div>
      <iframe
        width="560"
        height="400"
        src={embedUrl}
        title="YouTube Thumbnail"
        allowFullScreen
        frameBorder={0}
      />
    </div>
  );
};

export default YouTubeThumbnail;
