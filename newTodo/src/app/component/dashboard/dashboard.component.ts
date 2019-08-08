import { Component, OnInit } from '@angular/core';
import { ItemsFormService } from 'src/app/services/items-form.service';
import { Items } from 'src/app/models/item';
import { Person } from 'src/app/models/personnel';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { Dashboard } from '../../models/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemType: Dashboard[] = [];
  constructor(private itemService: ItemsFormService) { }

  ngOnInit() {
    this.itemService.get().subscribe(
      item => this.initDashboard(item)
    );

  }

  initDashboard(data: Items[]) {
    const total = new Dashboard('全部事项', interval(1000 / data.length).pipe(take(data.length)));
    const alreadyData = data.filter(item => item.itemState === '已办');
    const already = new Dashboard('已办事项', interval(1000 / alreadyData.length).pipe(take(alreadyData.length)));
    const waitForData = data.filter(item => item.itemState === '待办');
    const waitFor = new Dashboard('待办事项', interval(1000 / waitForData.length).pipe(take(waitForData.length)));




    this.itemType.push(total);
    this.itemType.push(already);
    this.itemType.push(waitFor);


    this.itemType.forEach(item => item.number$.subscribe());
  }

}
