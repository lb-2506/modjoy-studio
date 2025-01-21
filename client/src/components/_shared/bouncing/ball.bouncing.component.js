"use client";

import { useEffect, useRef } from "react";

export default function BallBouncingComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId
    const init = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.style.touchAction = "pan-y";

      const parentRect = canvas.parentElement.getBoundingClientRect();
      let width = parentRect.width;
      let height = parentRect.height;

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      const ball = {
        x: width * 0.25,
        y: height / 2,
        radius: 80,
        vx: 0,
        vy: 0,
        color: "#FF9054",
        isDragging: false,
        friction: 0.98,
        gravity: 0.5,
        bounceFactor: 0.7,
        minBounceHeight: 2,
        minVelocity: 0.1,
        rotation: 0,
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

        // Rotation
        context.save();
        context.translate(ball.x, ball.y);
        context.rotate(ball.rotation);
        context.translate(-ball.x, -ball.y);

        // Dégradé
        const gradient = context.createRadialGradient(
          ball.x - ball.radius * 0.4,
          ball.y - ball.radius * 0.4,
          ball.radius * 0.1,
          ball.x,
          ball.y,
          ball.radius
        );
        gradient.addColorStop(0.05, ball.color);
        gradient.addColorStop(1, `rgba(244, 112, 41, 1)`);

        context.beginPath();
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context.fillStyle = gradient;
        context.fill();
        context.closePath();

        // Texte "PLAY ME"
        context.font = `${ball.radius * 0.2}px Arial`;
        context.fillStyle = "white";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("PLAY ME", ball.x, ball.y);

        context.restore();

        // Curseur
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
          // Gravité
          if (!(ball.vy === 0 && ball.y + ball.radius >= height)) {
            ball.vy += ball.gravity;
          }

          ball.x += ball.vx;
          ball.y += ball.vy;

          const distanceTraveled = ball.vx;
          ball.rotation += distanceTraveled / ball.radius;

          ball.vx *= ball.friction;

          if (ball.x - ball.radius < 0) {
            ball.x = ball.radius;
            ball.vx *= -1;
          } else if (ball.x + ball.radius > width) {
            ball.x = width - ball.radius;
            ball.vx *= -1;
          }

          if (ball.y + ball.radius > height) {
            ball.y = height - ball.radius;
            if (Math.abs(ball.vy) > ball.minVelocity) {
              ball.vy *= -ball.bounceFactor;
            } else {
              ball.vy = 0;
            }
          }

          if (ball.y - ball.radius < 0) {
            ball.y = ball.radius;
            ball.vy *= -1;
          }

          if (Math.abs(ball.vx) < ball.minVelocity) {
            ball.vx = 0;
          }
        }

        drawBall();
        animationFrameId = requestAnimationFrame(updateBall);
      };

      const handleMouseDown = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;

        const dist = Math.sqrt(
          (mouse.x - ball.x) ** 2 + (mouse.y - ball.y) ** 2
        );
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
        const parentRect = canvas.parentElement.getBoundingClientRect();
        width = parentRect.width;
        height = parentRect.height;
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        drawBall();
      };

      const handleTouchStart = (e) => {
   

        const rect = canvas.getBoundingClientRect();

        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;

        const dist = Math.sqrt(
          (mouse.x - ball.x) ** 2 + (mouse.y - ball.y) ** 2
        );
        if (dist < ball.radius) {
          e.preventDefault();
          ball.isDragging = true;
          ball.vx = 0;
          ball.vy = 0;
          mouse.history = [];
        }
      };

      const handleTouchMove = (e) => {
    

        const rect = canvas.getBoundingClientRect();
        mouse.prevX = mouse.x;
        mouse.prevY = mouse.y;

        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;

        if (ball.isDragging) {
          e.preventDefault();
          ball.x = mouse.x;
          ball.y = mouse.y;
          const now = Date.now();
          mouse.history.push({ x: mouse.x, y: mouse.y, time: now });

          if (mouse.history.length > mouse.maxHistory) {
            mouse.history.shift();
          }
        }
      };

      const handleTouchEnd = (e) => {
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

      const handlePointerDown = (e) => {
        
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;

        const dist = Math.sqrt(
          (mouse.x - ball.x) ** 2 + (mouse.y - ball.y) ** 2
        );
        if (dist < ball.radius) {
          e.preventDefault();
          ball.isDragging = true;
          ball.vx = 0;
          ball.vy = 0;
          mouse.history = [];
        }
      };

      const handlePointerMove = (e) => {
     
        const rect = canvas.getBoundingClientRect();
        mouse.prevX = mouse.x;
        mouse.prevY = mouse.y;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;

        if (ball.isDragging) {
          e.preventDefault();
          ball.x = mouse.x;
          ball.y = mouse.y;
          const now = Date.now();
          mouse.history.push({ x: mouse.x, y: mouse.y, time: now });

          if (mouse.history.length > mouse.maxHistory) {
            mouse.history.shift();
          }
        }
      };

      const handlePointerUp = (e) => {
       
        if (ball.isDragging) {
          e.preventDefault();
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

      window.addEventListener("resize", handleResize);
      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("mouseleave", handleMouseUp);
      canvas.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
      canvas.addEventListener("touchend", handleTouchEnd, { passive: false });
      canvas.addEventListener("touchcancel", handleTouchEnd, {
        passive: false,
      });
      canvas.addEventListener("pointerdown", handlePointerDown, {
        passive: false,
      });
      canvas.addEventListener("pointermove", handlePointerMove, {
        passive: false,
      });
      canvas.addEventListener("pointerup", handlePointerUp, { passive: false });
      canvas.addEventListener("pointercancel", handlePointerUp, {
        passive: false,
      });

      updateBall();
    };

    const timeoutId = setTimeout(init, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute z-10 inset-0" />;
}
