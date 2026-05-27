import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music, SkipForward } from "lucide-react";

interface Track {
  title: string;
  artist: string;
  url: string;
}

const TRACKS: Track[] = [
  {
    title: "Cyber Sunset Drifter",
    artist: "Lofi Synth Node",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Quantum State Beat",
    artist: "Alex Thorne AI Beatmaker",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    title: "Silicon Valley Dawn",
    artist: "Echo Chamber",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  }
];

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const track = TRACKS[currentTrackIndex];

  useEffect(() => {
    // Initial audio generation safely
    audioRef.current = new Audio(track.url);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    
    const wasPlaying = isPlaying;
    audioRef.current.pause();
    
    audioRef.current = new Audio(track.url);
    audioRef.current.loop = true;
    audioRef.current.volume = isMuted ? 0 : volume;
    
    if (wasPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio failed to auto-start due to browser user approval policies.", err);
          setIsPlaying(false);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.volume = nextMuted ? 0 : volume;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      setIsMuted(val === 0);
      audioRef.current.volume = val;
    }
  };

  const handleSkip = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  return (
    <div className="glass-panel rounded-2xl p-4 flex items-center justify-between border-neutral-800 text-xs w-full max-w-md mx-auto">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className={`p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/10 ${isPlaying ? "animate-spin-slow" : ""}`}>
          <Music className="w-4 h-4" />
        </div>
        <div className="overflow-hidden min-w-[120px]">
          <p className="text-neutral-200 font-medium truncate">{track.title}</p>
          <p className="text-neutral-500 text-[10px] truncate">{track.artist}</p>
        </div>
      </div>

      {/* Dynamic graphic waves representing live player sound node */}
      {isPlaying && (
        <div className="flex items-end gap-[2px] h-3 px-2">
          <div className="w-[2px] bg-sky-400 animate-pulse h-full" style={{ animationDelay: "0ms" }} />
          <div className="w-[2px] bg-indigo-400 animate-pulse h-[60%]" style={{ animationDelay: "150ms" }} />
          <div className="w-[2px] bg-purple-400 animate-pulse h-[80%]" style={{ animationDelay: "300ms" }} />
          <div className="w-[2px] bg-sky-400 animate-pulse h-[40%]" style={{ animationDelay: "450ms" }} />
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          id="audio-play-btn"
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors border border-white/5"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
        </button>

        {/* Skip Track */}
        <button
          onClick={handleSkip}
          id="audio-skip-btn"
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors border border-white/5"
          title="Next track"
        >
          <SkipForward className="w-3.5 h-3.5" />
        </button>

        {/* Volume Mute */}
        <div className="flex items-center gap-1.5 ml-1">
          <button
            onClick={toggleMute}
            id="audio-mute-btn"
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-500" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-12 h-1 accent-indigo-400 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
