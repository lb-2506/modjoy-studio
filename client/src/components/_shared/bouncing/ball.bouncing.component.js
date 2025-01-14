"use client";

import { useEffect, useRef } from "react";

export default function BallBouncingComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    // Fonction d'initialisation qui sera appelée après un délai
    const init = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

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
        context.translate(ball.x, ball.y); // Déplacer le point d'origine au centre de la boule
        context.rotate(ball.rotation); // Appliquer la rotation
        context.translate(-ball.x, -ball.y); // Revenir au point d'origine

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

        context.restore(); // Restaurer le contexte sans rotation

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

          // Rotation en fonction de la distance parcourue horizontalement
          const distanceTraveled = ball.vx;
          ball.rotation += distanceTraveled / ball.radius;

          // Friction horizontale
          ball.vx *= ball.friction;

          // Rebond gauche/droite
          if (ball.x - ball.radius < 0) {
            ball.x = ball.radius;
            ball.vx *= -1;
          } else if (ball.x + ball.radius > width) {
            ball.x = width - ball.radius;
            ball.vx *= -1;
          }

          // Rebond bas
          if (ball.y + ball.radius > height) {
            ball.y = height - ball.radius;
            if (Math.abs(ball.vy) > ball.minVelocity) {
              ball.vy *= -ball.bounceFactor;
            } else {
              ball.vy = 0;
            }
          }

          // Eviter de sortir par le haut
          if (ball.y - ball.radius < 0) {
            ball.y = ball.radius;
            ball.vy *= -1;
          }

          // Arrêt horizontal si négligeable
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

      window.addEventListener("resize", handleResize);
      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("mouseleave", handleMouseUp);

      updateBall();
    };

    // On attend 100ms avant d'initialiser, pour que le layout se stabilise
    const timeoutId = setTimeout(init, 100);

    return () => {
      clearTimeout(timeoutId);
      // Les nettoyages d'eventListeners et cancelAnimationFrame se feront dans init quand vous aurez un ID global
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute z-10 inset-0" />;
}
