import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() header: string[];
  @Input() data: any[];
  @Input() checkbox: boolean;
  @Output() selectPage = new EventEmitter();
  @Input() pages: number;
  checkRow: number[] = [];
  constructor() { }

  ngOnInit() {
  }
  changeDate(selectPage) {
    this.selectPage.emit(selectPage);
  }
  onCheckbox(event, index) {
    const input = event.target;
    if (input.checked) {
      this.checkRow.push(index);
    } else {
      this.checkRow = this.checkRow.filter(item => item !== index);
    }

  }
}
