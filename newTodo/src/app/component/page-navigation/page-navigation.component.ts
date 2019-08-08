import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css']
})
export class PageNavigationComponent implements OnInit {
  @Input() pages: number;
  @Output() selectPage = new EventEmitter();
  selPage: number;
  constructor() {
    this.selPage = 0;
  }

  ngOnInit() {
  }

  onSelect(selectPage) {
    this.selPage = selectPage;
    this.selectPage.emit(selectPage);
  }

  selectDel() {
    if (this.selPage !== 0) {
      this.selPage = this.selPage - 1;
      this.selectPage.emit(this.selPage);
    }
  }
  selectAdd() {
    if (this.selPage !== this.pages - 1) {
      this.selPage = this.selPage + 1;
      this.selectPage.emit(this.selPage);
    }
  }
  get pagesArr() {
    const arr = new Array(this.pages);
    return arr;
  }

}
