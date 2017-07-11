import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
export class CheckListResultComponent implements OnInit {
  checkedCnt: number;
  @Input() checkedResult: string[];

  constructor() { }

  ngOnInit() {
  }

  private initResult() {
    this.checkedCnt = 0;
    this.checkedResult = [];
  }

}
