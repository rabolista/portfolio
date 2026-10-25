import { useEffect, useRef, useState } from "react";

const WIDTH = 300;
const HEIGHT = 420;
const GRAVITY = 0.45;
const FLAP_VELOCITY = -7.6;
const PIPE_WIDTH = 46;
const PIPE_GAP = 122;
const PIPE_SPACING = 190;
const PIPE_SPEED = 2.3;
const BIRD_X = 70;
const BIRD_RADIUS = 10;
const HIGH_SCORE_KEY = "rab-os-flappy-highscore";

export default function FlappyBirdApp() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const [status, setStatus] = useState("ready"); // ready | playing | gameover
  const [finalScore, setFinalScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    if (typeof window === "undefined") return 0;
    return Number(window.localStorage.getItem(HIGH_SCORE_KEY) || 0);
  });

  const stateRef = useRef(null);

  const resetGame = () => {
    stateRef.current = {
      bird: { y: HEIGHT / 2, vy: 0 },
      pipes: [{ x: WIDTH + 40, gapY: HEIGHT / 2 }],
      score: 0,
      frame: 0,
    };
  };

  const flap = () => {
    if (status === "gameover") {
      resetGame();
      setStatus("playing");
      return;
    }
    if (status === "ready") {
      resetGame();
      setStatus("playing");
    }
    if (stateRef.current) {
      stateRef.current.bird.vy = FLAP_VELOCITY;
    }
  };

  useEffect(() => {
    resetGame();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      const s = stateRef.current;
      ctx.fillStyle = "#0A0F0D";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      // faint grid
      ctx.strokeStyle = "rgba(74,222,128,0.06)";
      ctx.lineWidth = 1;
      for (let gx = 0; gx < WIDTH; gx += 24) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, HEIGHT);
        ctx.stroke();
      }
      for (let gy = 0; gy < HEIGHT; gy += 24) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(WIDTH, gy);
        ctx.stroke();
      }

      if (status === "playing") {
        s.frame += 1;
        s.bird.vy += GRAVITY;
        s.bird.y += s.bird.vy;

        s.pipes.forEach((p) => (p.x -= PIPE_SPEED));
        if (s.pipes[s.pipes.length - 1].x < WIDTH - PIPE_SPACING) {
          const margin = 60;
          const gapY = margin + Math.random() * (HEIGHT - 2 * margin - PIPE_GAP) + PIPE_GAP / 2;
          s.pipes.push({ x: WIDTH + PIPE_WIDTH, gapY });
        }
        s.pipes = s.pipes.filter((p) => p.x > -PIPE_WIDTH);

        // scoring
        s.pipes.forEach((p) => {
          if (!p.passed && p.x + PIPE_WIDTH < BIRD_X) {
            p.passed = true;
            s.score += 1;
          }
        });

        // collisions
        const groundY = HEIGHT - 14;
        let dead = s.bird.y - BIRD_RADIUS < 0 || s.bird.y + BIRD_RADIUS > groundY;
        for (const p of s.pipes) {
          const withinX = BIRD_X + BIRD_RADIUS > p.x && BIRD_X - BIRD_RADIUS < p.x + PIPE_WIDTH;
          if (withinX) {
            const gapTop = p.gapY - PIPE_GAP / 2;
            const gapBottom = p.gapY + PIPE_GAP / 2;
            if (s.bird.y - BIRD_RADIUS < gapTop || s.bird.y + BIRD_RADIUS > gapBottom) {
              dead = true;
            }
          }
        }

        if (dead) {
          setStatus("gameover");
          setFinalScore(s.score);
          setHighScore((prev) => {
            const next = Math.max(prev, s.score);
            window.localStorage.setItem(HIGH_SCORE_KEY, String(next));
            return next;
          });
        }
      }

      // pipes
      const s2 = stateRef.current;
      ctx.fillStyle = "#4ADE80";
      ctx.strokeStyle = "#0A0F0D";
      s2.pipes.forEach((p) => {
        const gapTop = p.gapY - PIPE_GAP / 2;
        const gapBottom = p.gapY + PIPE_GAP / 2;
        ctx.fillRect(p.x, 0, PIPE_WIDTH, gapTop);
        ctx.fillRect(p.x, gapBottom, PIPE_WIDTH, HEIGHT - gapBottom);
      });

      // ground
      ctx.fillStyle = "#111813";
      ctx.fillRect(0, HEIGHT - 14, WIDTH, 14);
      ctx.strokeStyle = "#24322A";
      ctx.beginPath();
      ctx.moveTo(0, HEIGHT - 14);
      ctx.lineTo(WIDTH, HEIGHT - 14);
      ctx.stroke();

      // bird
      ctx.fillStyle = "#F5A524";
      ctx.beginPath();
      ctx.arc(BIRD_X, s2.bird.y, BIRD_RADIUS, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#0A0F0D";
      ctx.beginPath();
      ctx.arc(BIRD_X + 3, s2.bird.y - 3, 1.6, 0, Math.PI * 2);
      ctx.fill();

      // score (in-play)
      if (status === "playing") {
        ctx.fillStyle = "#E7ECE9";
        ctx.font = "600 20px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(String(s2.score), WIDTH / 2, 40);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        flap();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-3 p-4 bg-rab-bg">
      <div className="font-display text-[11px] text-rab-muted">
        rab@rab-os:~$ ./flappy-bird — high score: {highScore}
      </div>
      <div
        className="relative rounded-md overflow-hidden border border-rab-line cursor-pointer select-none"
        style={{ width: WIDTH, height: HEIGHT }}
        onClick={flap}
      >
        <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />
        {status === "ready" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-rab-bg/50 font-display text-rab-paper text-center px-6">
            <div className="text-sm text-rab-green">RAB Bird</div>
            <div className="text-xs text-rab-muted">Click or press Space to flap</div>
          </div>
        )}
        {status === "gameover" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-rab-bg/70 font-display text-rab-paper text-center px-6">
            <div className="text-sm text-rab-red">Game Over</div>
            <div className="text-xs text-rab-muted">Score: {finalScore} · Best: {highScore}</div>
            <div className="text-[11px] text-rab-green mt-1">Click or press Space to retry</div>
          </div>
        )}
      </div>
    </div>
  );
}
