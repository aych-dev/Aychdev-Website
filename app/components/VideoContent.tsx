import React from 'react';

const VideoContent: React.FC<{ videoLink: string }> = ({ videoLink }) => {
  return (
    <video controls autoPlay={false}>
      <source src={videoLink} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoContent;
