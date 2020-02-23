import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private cells: string[] = [];
  private turn: string = '';

  constructor() { }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    for (var i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'x';
  }

  onMark(index) {
    console.log(index)
  }

}
