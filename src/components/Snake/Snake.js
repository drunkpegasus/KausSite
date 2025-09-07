import React, { Component } from "react";
import "./Snake.css"; 
import Particle from "../Particle";

const GRID_SIZE = 20; 
const CELL_SIZE = 20; 
const MOVE_DELAY = 100; 

class SnakeGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snake: [
      { x: 5, y: 5 },
      { x: 4, y: 5 },
      { x: 3, y: 5 },
      { x: 2, y: 5 }, // Initial size of 4
    ],
      food: this.generateFood(),
      direction: "right",
      isGameOver: false, 
      score: 0, 
    };

    
    this.animationFrame = null;
  }

  componentDidMount() {
    
    this.gameBoard.focus();

    
    setTimeout(() => {
        this.gameLoop();
      }, 100); 
    }
  componentWillUnmount() {
    
    cancelAnimationFrame(this.animationFrame);
  }

  
  generateFood() {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }

  
handleKeyPress = (e) => {
  e.preventDefault();
  const { direction } = this.state;

  
  let newDirection = direction;
  switch (e.key) {
    case "ArrowUp":
    case "w":
      newDirection = "up";
      break;
    case "ArrowDown":
    case "s":
      newDirection = "down";
      break;
    case "ArrowLeft":
    case "a":
      newDirection = "left";
      break;
    case "ArrowRight":
    case "d":
      newDirection = "right";
      break;
    default:
      break;
  }

  
  if (
    (newDirection === "up" && direction === "down") ||
    (newDirection === "down" && direction === "up") ||
    (newDirection === "left" && direction === "right") ||
    (newDirection === "right" && direction === "left")
  ) {
    
    return;
  }

  
  this.setState({ direction: newDirection });
};


  
moveSnake = () => {
  if (!this.state.isGameOver) {
    const { snake, food, direction } = this.state;
    let head = { ...snake[0] };

    // Update the head position based on the current direction
    switch (direction) {
      case "up":
        head.y -= 1;
        break;
      case "down":
        head.y += 1;
        break;
      case "left":
        head.x -= 1;
        break;
      case "right":
        head.x += 1;
        break;
      default:
        break;
    }

    // Check if the head crosses the edges and adjust its position accordingly
    if (head.x < 0) head.x = GRID_SIZE - 1;
    else if (head.x >= GRID_SIZE) head.x = 0;
    if (head.y < 0) head.y = GRID_SIZE - 1;
    else if (head.y >= GRID_SIZE) head.y = 0;

    // Check if the head collides with itself
    if (this.checkSelfCollision(head)) {
      console.log("Game Over!"); 
      this.setState({ isGameOver: true });
    } else {
      // Check if the head collides with food
      if (head.x === food.x && head.y === food.y) {
        snake.unshift(food);
        this.setState({ food: this.generateFood(), score: this.state.score + 1 });
      } else {
        snake.pop();
        snake.unshift(head);
      }

      this.setState({ snake });
    }
  }
};
sa

  
  checkSelfCollision(head) {
    const { snake } = this.state;
    return snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y);
  }

  
  gameLoop = () => {
    if (!this.state.isGameOver) {
      this.moveSnake(); 
      this.animationFrame = setTimeout(this.gameLoop, MOVE_DELAY); 
    }
  };

 
 render() {
  const { snake, food, isGameOver, score } = this.state;
  const grid = [];

  
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      const x = col;
      const y = row;

      const isSnakeSegment = snake.some(
        (segment) => segment.x === x && segment.y === y
      );
      const isFoodCell = food.x === x && food.y === y;

      
      const cellClass = `cell ${isSnakeSegment ? "snake" : ""} ${
        isFoodCell ? "food" : ""
      } ${row % 2 === col % 2 ? "even" : "odd"}`;

      let cellContent = ""; 

      
      if (isSnakeSegment && snake[0].x === x && snake[0].y === y) {
        cellContent = ""; 
      }

      grid.push(
        <div
          key={`${x}-${y}`}
          className={cellClass}
          style={{
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`,
          }}
        >
          {cellContent}
        </div>
      );
    }
  }

  return (
    <div>
      <div className="particle-container">
  <Particle /> {}
</div>
      {}
      <div
        className="snake-game"
        style={{
          width: `${GRID_SIZE * CELL_SIZE}px`,
          height: `${GRID_SIZE * CELL_SIZE}px`,
          margin: "125px auto 0", 
          position: "relative", 
        }}
        tabIndex="0"
        onKeyDown={this.handleKeyPress}
        ref={(div) => {
          this.gameBoard = div;
        }}
        autoFocus 
      >
        {grid}
      </div>

      {}
      <div className="touch-controls">
        {!isGameOver && ( 
          <div className="arrow-row">
            <button onClick={() => this.handleTouchControl("up")}>↑</button>
          </div>
        )}
        {!isGameOver && ( 
          <div className="arrow-row">
            <button onClick={() => this.handleTouchControl("left")}>←</button>
            <button onClick={() => this.handleTouchControl("down")}>↓</button>
            <button onClick={() => this.handleTouchControl("right")}>→</button>
          </div>
        )}
      </div>

      {isGameOver && (
  <div className="game-over">
    <p>Game Over!</p>
    <p>Score: {score}</p> {}
    <button onClick={this.restartGame}>Play Again</button>
  </div>
)}
    </div>
  );
}


handleTouchControl = (direction) => {
  const { direction: currentDirection } = this.state;

  
  if (
    (direction === "up" && currentDirection === "down") ||
    (direction === "down" && currentDirection === "up") ||
    (direction === "left" && currentDirection === "right") ||
    (direction === "right" && currentDirection === "left")
  ) {
    
    return;
  }

  this.setState({ direction });
};


  
restartGame = () => {
    cancelAnimationFrame(this.animationFrame); 
    this.setState({
      snake: [
        { x: 5, y: 5 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
        { x: 2, y: 5 }, // initial size of 4
      ],
      food: this.generateFood(),
      direction: "right",
      isGameOver: false,
      score: 0,
    });
    
    if (this.gameBoard) {
        this.gameBoard.focus();
      }
  
      
      this.animationFrame = setTimeout(this.gameLoop, 500);
    };
  
}

export default SnakeGame;