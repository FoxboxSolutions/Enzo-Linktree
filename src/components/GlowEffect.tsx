import React, { useEffect, useRef, useState } from "react";

export default function GlowEffect({ children, className = "" }: { children: React.ReactNode; className?: string; key?: string | number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoords({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        ["--x" as any]: `${coords.x}px`,
        ["--y" as any]: `${coords.y}px`,
      }}
    >
      <div className="mouse-radial-glow pointer-events-none absolute inset-0 z-0 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
