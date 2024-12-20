import { useEffect, useRef } from "react";

export default function BallBouncingComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const updateCanvasSize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      // Prevent distortion
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(canvas.offsetWidth / canvas.width, canvas.offsetHeight / canvas.height);
    };

    updateCanvasSize();

    // Ball properties
    const ball = {
      x: width * 0.25,
      y: height / 2,
      radius: 80,
      vx: 0,
      vy: 0,
      color: "orange",
      isDragging: false,
      friction: 0.98, // Friction to reduce speed
      gravity: 0.5, // Acceleration due to gravity
      bounceFactor: 0.7, // Energy loss on bounce
      minBounceHeight: 2, // Minimum height for a bounce
      minVelocity: 0.1, // Minimum velocity to stop rebounding
    };

    const mouse = {
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
      history: [],
      maxHistory: 5,
    };

    const drawBall = () => {
      context.clearRect(0, 0, width, height);

      // Shadow (always at the bottom of the parent)
      const shadowY = height - 5;
      const shadowScale = 1 - (ball.y / height) * 0.5; // Shadow size decreases as ball moves up
      context.beginPath();
      context.ellipse(
        ball.x,
        shadowY,
        ball.radius * shadowScale,
        ball.radius * 0.1 * shadowScale,
        0,
        0,
        Math.PI * 2
      );
      context.fillStyle = `rgba(0, 0, 0, 0.4)`;
      context.fill();
      context.closePath();

      // Gradient for 3D lighting
      const gradient = context.createRadialGradient(
        ball.x - ball.radius * 0.4,
        ball.y - ball.radius * 0.4,
        ball.radius * 0.2,
        ball.x,
        ball.y,
        ball.radius
      );
      gradient.addColorStop(0.05, ball.color);
      gradient.addColorStop(1, `rgba(255, 144, 84, 1)`); // Shadow

      context.beginPath();
      context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      context.fillStyle = gradient;
      context.fill();
      context.closePath();

      // Set cursor style based on mouse position
      const distToBall = Math.sqrt(
        (mouse.x - ball.x) ** 2 + (mouse.y - ball.y) ** 2
      );
      if (ball.isDragging) {
        canvas.style.cursor = "grabbing";
      } else if (distToBall < ball.radius) {
        canvas.style.cursor = "grab";
      } else {
        canvas.style.cursor = "default";
      }
    };

    const updateBall = () => {
      if (!ball.isDragging) {
        // Apply gravity if not stable on ground
        if (!(ball.vy === 0 && ball.y + ball.radius >= height)) {
          ball.vy += ball.gravity;
        }

        ball.x += ball.vx;
        ball.y += ball.vy;

        // Horizontal friction
        ball.vx *= ball.friction;

        // Bounce on left/right walls
        if (ball.x - ball.radius < 0) {
          ball.x = ball.radius;
          ball.vx *= -1;
        } else if (ball.x + ball.radius > width) {
          ball.x = width - ball.radius;
          ball.vx *= -1;
        }

        // Bounce on the bottom
        if (ball.y + ball.radius > height) {
          ball.y = height - ball.radius;

          if (Math.abs(ball.vy) > ball.minVelocity) {
            ball.vy *= -ball.bounceFactor;
          } else {
            ball.vy = 0;
          }
        }

        // Prevent going above top
        if (ball.y - ball.radius < 0) {
          ball.y = ball.radius;
          ball.vy *= -1;
        }

        // Stop horizontal movement if negligible
        if (Math.abs(ball.vx) < ball.minVelocity) {
          ball.vx = 0;
        }
      }

      drawBall();
      requestAnimationFrame(updateBall);
    };

    const handleMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      const dist = Math.sqrt((mouse.x - ball.x) ** 2 + (mouse.y - ball.y) ** 2);
      if (dist < ball.radius) {
        ball.isDragging = true;
        ball.vx = 0;
        ball.vy = 0;
        mouse.history = [];
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      if (ball.isDragging) {
        ball.x = mouse.x;
        ball.y = mouse.y;

        const now = Date.now();
        mouse.history.push({ x: mouse.x, y: mouse.y, time: now });

        if (mouse.history.length > mouse.maxHistory) {
          mouse.history.shift();
        }
      }
    };

    const handleMouseUp = () => {
      if (ball.isDragging) {
        let totalVx = 0;
        let totalVy = 0;
        let totalWeights = 0;

        for (let i = 1; i < mouse.history.length; i++) {
          const dx = mouse.history[i].x - mouse.history[i - 1].x;
          const dy = mouse.history[i].y - mouse.history[i - 1].y;
          const dt = mouse.history[i].time - mouse.history[i - 1].time;

          if (dt > 0) {
            const weight = i;
            totalVx += (dx / dt) * weight;
            totalVy += (dy / dt) * weight;
            totalWeights += weight;
          }
        }

        if (totalWeights > 0) {
          ball.vx = (totalVx / totalWeights) * 15;
          ball.vy = (totalVy / totalWeights) * 15;
        }

        ball.isDragging = false;
      }
    };

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      drawBall();
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseUp);

    updateBall();

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseUp);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute z-10 top-0 left-0 w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
