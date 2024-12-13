import React, { useEffect, useRef } from "react";

const SpiralAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = 400);
    const height = (canvas.height = 400);
    const centerX = width / 2;
    const centerY = height / 2;
    const lines = 120;
    const radius = 180;
    let animationFrameId: number;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < lines; i++) {
        const angle = (i / lines) * Math.PI * 2 + time * 0.001;
        const depthFactor = Math.sin(time * 0.002 + i * 0.2) * 0.5 + 0.5;
        const dynamicRadius = radius * (0.7 + 0.3 * depthFactor);

        const x1 = centerX + Math.cos(angle) * dynamicRadius;
        const y1 = centerY + Math.sin(angle) * dynamicRadius;

        const x2 =
          centerX + Math.cos(angle + Math.PI / 2) * (dynamicRadius * 0.5);
        const y2 =
          centerY + Math.sin(angle + Math.PI / 2) * (dynamicRadius * 0.5);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + 0.3 * depthFactor})`;
        ctx.lineWidth = 0.5 + depthFactor * 0.2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative flex items-center justify-center ">
      <canvas ref={canvasRef} className="rounded-full" />
    </div>
  );
};

export default SpiralAnimation;
