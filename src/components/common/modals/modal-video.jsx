import React from 'react';
import ModalVideo from 'react-modal-video';

const VideoModal = ({ isVideoOpen, setIsVideoOpen }) => {
  return (
    <ModalVideo channel='custom' autoplay isOpen={isVideoOpen}
      url='/about-us.mp4' onClose={() => setIsVideoOpen(false)} />
  );
};

export default VideoModal;