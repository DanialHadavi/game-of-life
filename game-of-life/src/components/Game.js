import React from "react";
//I will try to set up inputs for users to decide the size later
const WIDTH = 600; //TBD
const HEIGHT = 600; //TBD
const CELL_SIZE = 20; //TBD
class Cell extends React.Component {
  render() {
    const { x, y } = this.props;
    return (
      <div
        className="Cell"
        style={{
          left: `${CELL_SIZE * x + 1}px`,
          top: `${CELL_SIZE * y + 1}px`,
          width: `${CELL_SIZE - 1}px`,
          height: `${CELL_SIZE - 1}px`,
        }}
      />
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();
    this.rows = HEIGHT / CELL_SIZE;
    this.cols = WIDTH / CELL_SIZE;
  }
  state = {
    cells: [],
    isRunning: false,
    interval: 0,
    genCount: 0,
    step: false,
  };
  //Logics go here
  //GenCount
  //Allow users to adjust speed
  //Allow users for manual step
  //Random cells
  //Maybe also sample cells
  //option to clear
  //some styling after everything is working

  render() {
    return (
      <div>
        <Cell />
      </div>
    );
  }
}
export default Game;
