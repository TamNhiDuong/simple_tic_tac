import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private cells: string[] = [];
  private turn: string = '';
  private winner: string = '';
  private endGame: boolean;

  constructor() { }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    for (var i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'x';
    this.endGame = false;
  }

  onMark(index) {
    console.log(index);
      this.cells[index] = this.turn;
      {this.turn == 'x' ? this.turn = 'o' : this.turn = 'x'};
      this.checkGameWinner();
  }

  restart() {
    this.startGame();
  }

  checkGameWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let line of lines) {
      if (this.cells[line[0]] === this.cells[line[1]] 
        && this.cells[line[1]] === this.cells[line[2]] 
        && this.cells[line[0]] !== null) {
          this.winner = this.cells[line[0]];
          this.endGame = true; 
        }
    }
  }

}
