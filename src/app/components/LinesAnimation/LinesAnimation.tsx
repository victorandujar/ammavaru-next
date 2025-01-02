import React, { useEffect, useRef } from "react";

type DNAAnimationProps = {
  width?: number;
  height?: number;
  strandHeight?: number;
  strandSpeed?: number;
};

const LinesAnimation: React.FC<DNAAnimationProps> = ({
  width = 400,
  height = 100,
  strandHeight = 400,
  strandSpeed = 0.01,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = width / 2;
    const particleCount = 20;
    const amplitude = 100;
    const frequency = 0.05;
    let offset = 0;

    const particles: { y: number; xOffset: number }[] = Array.from({
      length: particleCount,
    }).map((_, i) => ({
      y: (i / particleCount) * strandHeight,
      xOffset: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        const x1 =
          centerX + Math.sin(particle.y * frequency + offset) * amplitude;
        const x2 =
          centerX - Math.sin(particle.y * frequency + offset) * amplitude;

        ctx.beginPath();
        ctx.arc(x1, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x2, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(x1, particle.y);
        ctx.lineTo(x2, particle.y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();

        particle.y += strandSpeed;
        if (particle.y > height) particle.y = 0;
      });

      offset += strandSpeed;

      requestAnimationFrame(draw);
    };

    draw();
  }, [width, height, strandHeight, strandSpeed]);

  return (
    <div className="relative flex items-center justify-center mobile:w-fit">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
};

export default LinesAnimation;
