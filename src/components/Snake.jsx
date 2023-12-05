import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const ROWS = 13;
const COLS = 20;

const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

const SnakeGame = () => {
  const [loading, setLoading] = useState(true)

  useState(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const generateRandomPosition = () => {
    const row = Math.floor(Math.random() * ROWS);
    const col = Math.floor(Math.random() * COLS);
    return { row, col };
  };

  const [snake, setSnake] = useState([{ row: 0, col: 0 }]);
  const [food, setFood] = useState(generateRandomPosition());
  const [direction, setDirection] = useState(Direction.RIGHT);

  const handleKeyPress = (e) => {
    switch (e.key) {
      case 'ArrowUp':
          setDirection(Direction.UP);
          break;
        case 'W':
          setDirection(Direction.UP);
          break;
        case 'w':
          setDirection(Direction.UP);
          break;
        case 'ArrowDown':
          setDirection(Direction.DOWN);
          break;
        case 'S':
          setDirection(Direction.DOWN);
          break;
        case 's':
          setDirection(Direction.DOWN);
          break;
        case 'ArrowLeft':
          setDirection(Direction.LEFT);
          break;
        case 'A':
          setDirection(Direction.LEFT);
          break;
        case 'a':
          setDirection(Direction.LEFT);
          break;
        case 'ArrowRight':
          setDirection(Direction.RIGHT);
          break;
        case 'D':
          setDirection(Direction.RIGHT);
          break;
        case 'd':
          setDirection(Direction.RIGHT);
          break;
      default:
        break;
    }
  };

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case Direction.UP:
        head.row = (head.row - 1 + ROWS) % ROWS;
        break;
      case Direction.DOWN:
        head.row = (head.row + 1) % ROWS;
        break;
      case Direction.LEFT:
        head.col = (head.col - 1 + COLS) % COLS;
        break;
      case Direction.RIGHT:
        head.col = (head.col + 1) % COLS;
        break;
      default:
        break;
    }

    newSnake.unshift(head);

    if (head.row === food.row && head.col === food.col) {
      setFood(generateRandomPosition());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const checkCollision = () => {
    const head = snake[0];
    return snake.slice(1).some((segment) => segment.row === head.row && segment.col === head.col);
  };

  const resetGame = () => {
    setSnake([{ row: 0, col: 0 }]);
    setFood(generateRandomPosition());
    setDirection(Direction.RIGHT);
  };

  useEffect(() => {
    const handle = setInterval(() => {
      moveSnake();
      if (checkCollision()) {
        clearInterval(handle);
        alert('Game Over! Press OK to play again.');
        resetGame();
      }
    }, 175);

    return () => clearInterval(handle);
  }, [snake, direction]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
    {loading ? 
    <Loading />
    : 
    <table>
        <tbody>
          {Array.from({ length: ROWS }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: COLS }).map((_, colIndex) => (
                <td
                  key={colIndex}
                  className={`cell ${snake.some((segment) => segment.row === rowIndex && segment.col === colIndex) ? 'snake' : ''} ${
                    food.row === rowIndex && food.col === colIndex ? 'food' : ''
                  }`}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>}
    </>
  );
};

export default SnakeGame;
