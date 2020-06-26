import React, { Component } from "react";
import Game from "./components/Game";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Conway's Game Of Life</h1>
        <div className="container">
          <Game />
          <div className="rules">
            <ul>
              <ul>Rules:</ul>
              <ol>
                {" "}
                1.Any live cell with fewer than two live neighbours dies, as if
                by underpopulation.
              </ol>
              <ol>
                {" "}
                2.Any live cell with two or three live neighbours lives on to
                the next generation.
              </ol>
              <ol>
                {" "}
                3.Any live cell with more than three live neighbours dies, as if
                by overpopulation.
              </ol>
              <ol>
                {" "}
                4.Any dead cell with exactly three live neighbours becomes a
                live cell, as if by reproduction.
              </ol>
              <ul>These rules can be condensed into the following:</ul>
              <ol>
                1.Any live cell with two or three live neighbours survives.
              </ol>
              <ol>
                2.Any dead cell with three live neighbours becomes a live cell.
              </ol>
              <ol>
                3.All other live cells die in the next generation. Similarly,
                all other dead cells stay dead.
              </ol>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
