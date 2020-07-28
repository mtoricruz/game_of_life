import React from 'react';
import Grid from './Grid';
import Buttons from './Buttons'
import '../index.css'

class Main extends React.Component {


   constructor() {
      super();
      this.speed = 250;
      this.rows = 30;
      this.cols = 50;

      this.state = {
         generation: 0,
         gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
      }
   }

   selectBox = (row, col) => {
      let gridCopy = arrayClone(this.state.gridFull);
      gridCopy[row][col] = !gridCopy[row][col];
      this.setState({
         gridFull: gridCopy
      })

   }

   random = () => {
      let gridCopy = arrayClone(this.state.gridFull);
      for (let i = 0; i < this.rows; i++) {
         for (let j = 0; j < this.cols; j++) {
            if (Math.floor(Math.random() * 4) === 1) {
               gridCopy[i][j] = true;
            }
         }
      }
      this.setState({
         gridFull: gridCopy
      })
   }

   playButton = () => {
      clearInterval(this.intervalId)
      this.intervalId = setInterval(this.play, this.speed);
   }

   pauseButton = () => {
      clearInterval(this.intervalId);
   }

   slowButton = () => {
      this.speed = 500;
      this.playButton();
   }

   fastButton = () => {
      this.speed = 30;
      this.playButton();
   }

   clearButton = () => {
      var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
      this.setState({
         gridFull: grid,
         generation: 0,
         speed: 0, 
      });
   }

   speedMenu = (speed) => {
      switch (speed) {
         case '1':
            this.speed = 600;
         break;
         case '2':
            this.speed = 250;
         break;
         case '3':
            this.speed = 70;
         break;
      }
      this.playButton()
   }

   gridSize = (size) => {
      switch (size) {
         case '1':
            this.cols = 20;
            this.rows = 10;
         break;
         case '2':
            this.cols = 50;
            this.rows = 30;
         break;
         default:
            this.cols = 70;
            this.rows = 50;
      }
      this.clearButton()
   }

   play = () => {
      let g = this.state.gridFull;
      let g2 = arrayClone(this.state.gridFull);

      for (let i = 0; i < this.rows; i++) {
         for (let j = 0; j < this.cols; j++) {
            let count = 0;
            if (i > 0) if (g[i - 1][j]) count++;
            if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
            if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
            if (j < this.cols - 1) if (g[i][j + 1]) count++;
            if (j > 0) if (g[i][j - 1]) count++;
            if (i < this.rows - 1) if (g[i + 1][j]) count++;
            if (i < this.rows -1 && j > 0) if (g[i + 1][j - 1]) count++;
            if (i < this.rows - 1 && this.cols -1) if (g[i + 1][j + 1]) count++;
            if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
            if (!g[i][j] && count === 3) g2[i][j] = true;
         }
      }
      
      this.setState({
         gridFull: g2,
         generation: this.state.generation + 1
      });
   }

   componentDidMount() {
      this.pauseButton();
   }

   render() {
      return (
         <div className='app-container'>
            <div className='containers'>
               <h1>The Game of Life</h1>
               <Buttons
                  playButton = {this.playButton}
                  pauseButton = {this.pauseButton}
                  slowButton = {this.slowButton}
                  fastButton = {this.fastButton}
                  speedMenu = {this.speedMenu}
                  clearButton = {this.clearButton}
                  randomButton = {this.random}
                  gridSize = {this.gridSize}
                  />
               <Grid
                  gridFull = {this.state.gridFull} 
                  rows = {this.rows}
                  cols = {this.cols}
                  selectBox = {this.selectBox}
                  />
               &nbsp;
               <h2>Generations: {this.state.generation} </h2>
            </div>
            <div className='containers-a'>
               <div className='rules'>
                  <h2>Rules:</h2>
                  <p>Rule # 1: Any live cell with fewer than two live neighbours dies, as if by underpopulation.</p>
                  <p>Rule # 2: Any live cell with two or three live neighbours lives on to the next generation.</p>
                  <p>Rule # 3: Any live cell with more than three live neighbours dies, as if by overpopulation.</p>
                  <p>Rule # 4: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>
               </div>
            </div>
         </div>
        )
    }
}

function arrayClone(arr) {
   return JSON.parse(JSON.stringify(arr));
}

export default Main