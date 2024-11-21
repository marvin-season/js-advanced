import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current?.play();
      });

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // 对于支持原生 HLS 的浏览器（如 Safari）
      videoRef.current.src = src;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current?.play();
      });
    } else {
      console.error('This browser does not support HLS.');
    }
  }, [src]);

  return <video ref={videoRef} controls style={{ width: '100%' }} />;
};

export default function M3u8Page() {
  return (
    <div>
      <h2>M3u8Page</h2>
      <VideoPlayer src="/local/m3u8/smartvision_c059ebb624.m3u8" />
    </div>
  );
}
