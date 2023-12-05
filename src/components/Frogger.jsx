import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const ROWS = 13;
const COLS = 16;

const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

const FroggerGame = () => {
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

  const [frog, setFrog] = useState({ row: ROWS - 1, col: Math.floor(COLS / 2) });
  const [cars, setCars] = useState([]);
  const [direction, setDirection] = useState(null); // Initialize with null to indicate waiting for input

  const handleKeyPress = (e) => {
    if (!direction) {
      // Start moving only if no direction is set
      switch (e.key) {
        case 'ArrowUp':
          setDirection(Direction.UP);
          break;
        case 'ArrowDown':
          setDirection(Direction.DOWN);
          break;
        case 'ArrowLeft':
          setDirection(Direction.LEFT);
          break;
        case 'ArrowRight':
          setDirection(Direction.RIGHT);
          break;
        default:
          break;
      }
    }
  };

  const moveFrog = () => {
    if (direction) {
      const newFrog = { ...frog };

      switch (direction) {
        case Direction.UP:
          newFrog.row = (newFrog.row - 1 + ROWS) % ROWS;
          break;
        case Direction.DOWN:
          newFrog.row = (newFrog.row + 1) % ROWS;
          break;
        case Direction.LEFT:
          newFrog.col = (newFrog.col - 1 + COLS) % COLS;
          break;
        case Direction.RIGHT:
          newFrog.col = (newFrog.col + 1) % COLS;
          break;
        default:
          break;
      }

      setFrog(newFrog);
      setDirection(null); // Reset direction after moving
    }
  };

const generateCars = () => {
  const newCars = [];
  for (let i = 0; i < ROWS; i++) {
    // Exclude the bottom row where the frog starts
    if (i !== frog.row) {
      const col = Math.floor(Math.random() * COLS);
      const direction = Math.random() < 0.5 ? Direction.LEFT : Direction.RIGHT;
      newCars.push({ row: i, col, direction });
    }
  }
  setCars(newCars);
};


  const moveCars = () => {
    setCars((prevCars) => {
      return prevCars.map((car) => {
        const newCar = { ...car };

        switch (car.direction) {
          case Direction.LEFT:
            newCar.col = (newCar.col - 1 + COLS) % COLS;
            break;
          case Direction.RIGHT:
            newCar.col = (newCar.col + 1) % COLS;
            break;
          default:
            break;
        }

        return newCar;
      });
    });
  };

  const checkCollision = () => {
    // Check collision with cars
    if (cars.some((car) => car.row === frog.row && car.col === frog.col)) {
      // Game over logic
      resetGame();
    }
  };

  const resetGame = () => {
    setFrog({ row: ROWS - 1, col: Math.floor(COLS / 2) });
    setCars([]);
    setDirection(null);
    generateCars();
  };

  useEffect(() => {
    generateCars();
  }, []); // Initial car generation

  useEffect(() => {
    const handle = setInterval(() => {
      moveFrog();
      moveCars();
      checkCollision(); // Implement collision logic

      // Implement logic to check if the frog reached the home
      // Example: if (frog.row === 0) { /* Frog reached home logic */ }

    }, 250);

    return () => clearInterval(handle);
  }, [frog, direction, cars]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]); // Add direction to dependency array to update the effect when direction changes

  return (
    <>
    {loading ? 
    <Loading /> 
    : 
    <table>
        <tbody>
          {Array.from({ length: ROWS }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: COLS }).map((_, colIndex) => {
                // Add logic to display frog, cars based on their positions
                const isFrog = frog.row === rowIndex && frog.col === colIndex;
                const isCar = cars.some((car) => car.row === rowIndex && car.col === colIndex);

                return (
                  <td
                    key={colIndex}
                    className={`cell ${isFrog ? 'frog' : ''} ${isCar ? 'car' : ''}`}
                  ></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>}
    </>
  );
};

export default FroggerGame;
