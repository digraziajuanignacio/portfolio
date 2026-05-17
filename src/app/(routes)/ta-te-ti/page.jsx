"use client";
import { useState, useEffect, useCallback } from "react";
import { Fade } from "react-awesome-reveal";
import { FaRobot, FaUser, FaRedo, FaBrain } from "react-icons/fa";

export default function TaTeTi() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isAiThinking, setIsAiThinking] = useState(false);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return squares.includes(null) ? null : "Draw";
  };

  const getBestMove = useCallback((currentBoard) => {
    const emptySquares = currentBoard.map((s, i) => s === null ? i : null).filter(i => i !== null);
    for (let player of ["O", "X"]) {
        for (let move of emptySquares) {
            let tempBoard = [...currentBoard];
            tempBoard[move] = player;
            if (calculateWinner(tempBoard) === player) return move;
        }
    }
    if (currentBoard[4] === null) return 4;
    const corners = [0, 2, 6, 8].filter(i => currentBoard[i] === null);
    if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];
    return emptySquares[Math.floor(Math.random() * emptySquares.length)];
  }, []);

  useEffect(() => {
    if (!isXNext && !winner) {
      setIsAiThinking(true);
      const timer = setTimeout(() => {
        const move = getBestMove(board);
        if (move !== undefined) {
          const newBoard = [...board];
          newBoard[move] = "O";
          setBoard(newBoard);
          const win = calculateWinner(newBoard);
          if (win) setWinner(win);
          setIsXNext(true);
        }
        setIsAiThinking(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isXNext, board, winner, getBestMove]);

  const handleClick = (i) => {
    if (board[i] || winner || !isXNext) return;
    const newBoard = [...board];
    newBoard[i] = "X";
    setBoard(newBoard);
    const win = calculateWinner(newBoard);
    if (win) setWinner(win);
    setIsXNext(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="game-wrapper-full min-vh-100 py-5">
      <div className="container py-5">
        <Fade triggerOnce>
          <div className="text-center mb-5">
            <div className="ai-icon-wrapper mx-auto mb-3">
              <FaBrain className="ai-icon" />
            </div>
            <h1 className="fw-bold display-5 text-dark">Ta-Te-Ti AI</h1>
            <p className="text-muted">Desafía a mi IA (una simulación de mi lógica de desarrollo) en un duelo estratégico de Ta-Te-Ti.</p>
            <div className="title-underline mx-auto"></div>
          </div>
        </Fade>

        <div className="row justify-content-center g-4">
          <div className="col-12 col-lg-6">
            <div className="game-card-modern">
              <div className="status-bar-modern mb-4">
                <div className={`player-badge-modern ${isXNext ? 'active' : ''}`}>
                  <FaUser className="me-2" /> Tú (X)
                </div>
                <div className={`player-badge-modern ${!isXNext ? 'active' : ''}`}>
                  <FaRobot className="me-2" /> IA (O)
                </div>
              </div>

              <div className="board-modern">
                {board.map((square, i) => (
                  <button 
                    key={i} 
                    className={`square-modern ${square || ''} ${winner && calculateWinner(board) === square ? 'winner' : ''}`}
                    onClick={() => handleClick(i)}
                    disabled={!!square || !!winner || !isXNext}
                  >
                    {square}
                  </button>
                ))}
              </div>

              {winner && (
                <Fade bottom>
                  <div className={`result-box-modern mt-4 ${winner === 'Draw' ? 'draw' : 'has-winner'}`}>
                    {winner === 'Draw' ? '¡Es un empate!' : `¡El ganador es ${winner === 'X' ? 'Tú' : 'la IA'}!`}
                  </div>
                </Fade>
              )}

              {isAiThinking && (
                <div className="ai-thinking-modern mt-3">
                  <span className="dot-modern"></span>
                  <span className="dot-modern"></span>
                  <span className="dot-modern"></span>
                  IA pensando...
                </div>
              )}

              <button className="btn-reset-modern mt-4" onClick={resetGame}>
                <FaRedo className="me-2" /> Reiniciar Duelo
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="info-card-modern">
              <h4 className="fw-bold mb-3 text-dark">Sobre este desafío</h4>
              <p className="text-muted small">
                Este juego es una demostración de <strong>lógica computacional</strong> y <strong>manejo de estados complejos</strong> en React 19.
              </p>
              <ul className="feature-list-modern">
                <li>Algoritmo de decisión reactivo</li>
                <li>Interfaz Glassmorphism</li>
                <li>Animaciones fluidas con Reveal</li>
                <li>Responsive Design optimizado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .game-wrapper-full { background-color: #fcfcfc; position: relative; z-index: 1; }
        .title-underline { width: 60px; height: 4px; background: #198754; border-radius: 2px; margin-top: 15px; }
        .ai-icon-wrapper { width: 70px; height: 70px; background: rgba(25, 135, 84, 0.1); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: #198754; box-shadow: 0 10px 20px rgba(25, 135, 84, 0.1); }
        
        .game-card-modern { background: white; border-radius: 24px; padding: 2.5rem; box-shadow: 0 20px 50px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.03); text-align: center; }
        
        .status-bar-modern { display: flex; justify-content: center; gap: 1rem; }
        .player-badge-modern { padding: 10px 24px; border-radius: 50px; font-weight: 700; font-size: 0.85rem; color: #666; background: #f8f9fa; border: 1px solid #eee; transition: all 0.3s; }
        .player-badge-modern.active { background: #198754; color: white; border-color: #198754; box-shadow: 0 5px 15px rgba(25, 135, 84, 0.3); }

        .board-modern { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; max-width: 350px; margin: 0 auto; }
        .square-modern { width: 100%; aspect-ratio: 1; background: #fcfcfc; border: 2px solid #eee; border-radius: 16px; font-size: 2.5rem; font-weight: 800; cursor: pointer; transition: all 0.2s; color: #333; display: flex; align-items: center; justify-content: center; }
        .square-modern:hover:not(:disabled) { background: white; border-color: #198754; transform: scale(1.02); }
        .square-modern.X { color: #0d6efd; }
        .square-modern.O { color: #198754; }
        .square-modern.winner { background: #d1e7dd !important; border-color: #198754 !important; }

        .result-box-modern { padding: 15px; border-radius: 12px; font-weight: 800; font-size: 1.1rem; }
        .result-box-modern.has-winner { background: #d1e7dd; color: #0f5132; }
        .result-box-modern.draw { background: #fef3c7; color: #92400e; }

        .btn-reset-modern { width: 100%; padding: 12px; background: #333; color: white; border: none; border-radius: 12px; font-weight: 700; transition: all 0.3s; cursor: pointer; }
        .btn-reset-modern:hover { background: #000; transform: translateY(-2px); }

        .info-card-modern { background: white; border-radius: 20px; padding: 2.5rem; border: 1px solid rgba(0,0,0,0.03); box-shadow: 0 10px 30px rgba(0,0,0,0.02); }
        .feature-list-modern { list-style: none; padding: 0; margin-top: 1.5rem; text-align: left; }
        .feature-list-modern li { margin-bottom: 12px; font-size: 0.9rem; color: #555; position: relative; padding-left: 25px; }
        .feature-list-modern li::before { content: "✓"; position: absolute; left: 0; color: #198754; font-weight: 900; }

        .ai-thinking-modern { color: #198754; font-weight: 600; font-size: 0.9rem; }
        .dot-modern { height: 6px; width: 6px; background-color: #198754; border-radius: 50%; display: inline-block; margin: 0 3px; animation: bounce 1.4s infinite ease-in-out both; }
        .dot-modern:nth-child(1) { animation-delay: -0.32s; }
        .dot-modern:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1.0); } }

        @media (max-width: 576px) { .board-modern { max-width: 280px; gap: 10px; } .square-modern { font-size: 2rem; } .game-card-modern { padding: 1.5rem; } }
      `}</style>
    </div>
  );
}
