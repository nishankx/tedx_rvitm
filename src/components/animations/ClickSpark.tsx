import React, { useRef, useEffect, useCallback } from 'react';

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  extraScale?: number;
  children?: React.ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = '#E62B1E',
  sparkSize = 10,
  sparkRadius = 18,
  sparkCount = 8,
  duration = 450,
  extraScale = 1.3,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const draw = (time: number) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = time - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const currentRadius = sparkRadius * easeProgress * extraScale;
        const currentLength = sparkSize * (1 - easeProgress);

        const x1 = spark.x + Math.cos(spark.angle) * currentRadius;
        const y1 = spark.y + Math.sin(spark.angle) * currentRadius;
        const x2 = spark.x + Math.cos(spark.angle) * (currentRadius + currentLength);
        const y2 = spark.y + Math.sin(spark.angle) * (currentRadius + currentLength);

        ctx.save();
        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2 * (1 - progress);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();

        return true;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, extraScale]);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const now = performance.now();
      const newSparks: Spark[] = [];
      for (let i = 0; i < sparkCount; i++) {
        newSparks.push({
          x: e.clientX,
          y: e.clientY,
          angle: (2 * Math.PI * i) / sparkCount,
          startTime: now,
        });
      }
      sparksRef.current.push(...newSparks);
    },
    [sparkCount]
  );

  useEffect(() => {
    window.addEventListener('pointerdown', handleClick);
    return () => window.removeEventListener('pointerdown', handleClick);
  }, [handleClick]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9999]"
      />
      {children}
    </>
  );
};

export default ClickSpark;
