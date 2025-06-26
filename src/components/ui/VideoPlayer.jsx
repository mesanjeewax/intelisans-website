import React, { useState, useRef } from 'react'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from 'react-icons/fa'

const VideoPlayer = ({ src, poster, className = "", autoPlay = false, controls = true }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full rounded-lg shadow-lg"
        poster={poster}
        muted={isMuted}
        autoPlay={autoPlay}
        loop
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        <p className="text-gray-600">
          Your browser doesn't support videos. 
          <a href={src} className="text-primary-500 hover:underline ml-1">
            Download the video instead.
          </a>
        </p>
      </video>

      {/* Custom Controls Overlay */}
      {controls && (
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center space-x-4">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-primary-500 transition-all duration-200 hover:scale-110"
            >
              {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} className="ml-1" />}
            </button>

            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-primary-500 transition-all duration-200"
            >
              {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-primary-500 transition-all duration-200"
            >
              <FaExpand size={12} />
            </button>
          </div>
        </div>
      )}

      {/* Loading State */}
      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading video...</div>
      </div>
    </div>
  )
}

export default VideoPlayer