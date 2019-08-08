import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Items } from '../../models/item';
import { Person } from '../../models/personnel';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const item: Items[] = [
      {
        id: 1,
        itemName: '编写文案',
        itemType: '工作事项',
        itemDate: '2019-07-03', itemPerson: '林建伟', itemPriority: '一般', itemState: '已办', itemReamkes: '今日完成'
      },
      { id: 2, itemName: '打扫办公室', itemType: '工作事项', itemDate: '2019-07-02', itemPerson: '林建伟', itemPriority: '轻微', itemState: '已办' },
      { id: 3, itemName: '跟客户A沟通', itemType: '工作事项', itemDate: '2019-07-01', itemPerson: '林建伟', itemPriority: '紧急', itemState: '已办' },
      {
        id: 4, itemName: '团建',
        itemType: '工作事项', itemDate: '2019-07-05', itemPerson: '林建伟', itemPriority: '一般', itemState: '待办', itemReamkes: '今日完成'
      },
      { id: 5, itemName: '逻辑思维', itemType: '学习事项', itemDate: '2019-07-02', itemPerson: '林建伟', itemPriority: '紧急', itemState: '已办' },
      { id: 6, itemName: 'Jquery', itemType: '学习事项', itemDate: '2019-07-03', itemPerson: '林建伟', itemPriority: '一般', itemState: '已办' },
      {
        id: 7, itemName: 'Angular8开发',
        itemType: '学习事项', itemDate: '2019-07-05', itemPerson: '林建伟', itemPriority: '严重', itemState: '待办', itemReamkes: '今日完成'
      },
      { id: 8, itemName: '倒垃圾', itemType: '生活事项', itemDate: '2019-07-01', itemPerson: '林建伟', itemPriority: '一般', itemState: '已办' },
      { id: 9, itemName: '修理马桶', itemType: '生活事项', itemDate: '2019-07-01', itemPerson: '林建伟', itemPriority: '严重', itemState: '已办' },
      { id: 11, itemName: '编写文案', itemType: '工作事项', itemDate: '2019-07-03', itemPerson: '林建伟', itemPriority: '一般', itemState: '已办' },
      { id: 12, itemName: '打扫办公室', itemType: '工作事项', itemDate: '2019-07-02', itemPerson: '林建伟', itemPriority: '轻微', itemState: '已办' },
      { id: 13, itemName: '跟客户A沟通', itemType: '工作事项', itemDate: '2019-07-01', itemPerson: '林建伟', itemPriority: '紧急', itemState: '已办' },
      {
        id: 14, itemName: '团建',
        itemType: '工作事项', itemDate: '2019-07-05', itemPerson: '林建伟', itemPriority: '一般', itemState: '待办', itemReamkes: '今日完成'
      },
      { id: 15, itemName: '逻辑思维', itemType: '学习事项', itemDate: '2019-07-02', itemPerson: '林建伟', itemPriority: '紧急', itemState: '已办' },
      { id: 16, itemName: 'Jquery', itemType: '学习事项', itemDate: '2019-07-03', itemPerson: '林建伟', itemPriority: '一般', itemState: '已办' },
      {
        id: 17, itemName: 'Angular8开发',
        itemType: '学习事项', itemDate: '2019-07-05', itemPerson: '林建伟', itemPriority: '严重', itemState: '待办', itemReamkes: '今日完成'
      },
      { id: 18, itemName: '倒垃圾', itemType: '生活事项', itemDate: '2019-07-01', itemPerson: '林建伟', itemPriority: '一般', itemState: '已办' },
      { id: 19, itemName: '修理马桶', itemType: '生活事项', itemDate: '2019-07-01', itemPerson: '林建伟', itemPriority: '严重', itemState: '已办' },
      { id: 21, itemName: '编写文案', itemType: '工作事项', itemDate: '2019-07-03', itemPerson: '林建伟', itemPriority: '一般', itemState: '已办' },
      { id: 22, itemName: '打扫办公室', itemType: '工作事项', itemDate: '2019-07-02', itemPerson: '林建伟', itemPriority: '轻微', itemState: '已办' },
      { id: 23, itemName: '跟客户A沟通', itemType: '工作事项', itemDate: '2019-07-01', itemPerson: '林建伟', itemPriority: '紧急', itemState: '已办' },
      {
        id: 24, itemName: '团建',
        itemType: '工作事项', itemDate: '2019-07-05', itemPerson: '林建伟', itemPriority: '一般', itemState: '待办', itemReamkes: '明日完成'
      },
      { id: 25, itemName: '逻辑思维', itemType: '学习事项', itemDate: '2019-07-02', itemPerson: '林建伟', itemPriority: '紧急', itemState: '已办' },
      { id: 26, itemName: 'Jquery', itemType: '学习事项', itemDate: '2019-07-03', itemPerson: '林建伟', itemPriority: '一般', itemState: '已办' },
      {
        id: 27, itemName: 'Angular8开发',
        itemType: '学习事项', itemDate: '2019-07-05', itemPerson: '林建伟', itemPriority: '严重', itemState: '待办', itemReamkes: '今日完成'
      },
      { id: 28, itemName: '倒垃圾', itemType: '生活事项', itemDate: '2019-07-01', itemPerson: '林建伟', itemPriority: '一般', itemState: '已办' },
      { id: 29, itemName: '修理马桶', itemType: '生活事项', itemDate: '2019-07-01', itemPerson: '林建伟', itemPriority: '严重', itemState: '已办' },
    ];
    const persons: Person[] = [
      {
        id: 0, personName: 'Sunny', personAge: '26', personSex: '男', personCity: '北京', personPro: '前端',
        personPho: '18210919305', personEmail: '18210919305@163.com'
      },
      { id: 1, personName: 'Join', personAge: '22', personSex: '男', personCity: '北京', personPro: 'Boss', personPho: '18210919305', },
      { id: 2, personName: 'money', personAge: '24', personSex: '男', personCity: '北京', personPro: '设计师', personPho: '18210919305', },
      { id: 3, personName: '孙铭康', personAge: '30', personSex: '男', personCity: '北京', personPro: '产品经理', personPho: '18210919305', },
      { id: 4, personName: '建伟哥', personAge: '28', personSex: '男', personCity: '北京', personPro: '前后端', personPho: '18210919305', },
      { id: 5, personName: '牛琛', personAge: '25', personSex: '男', personCity: '北京', personPro: '后端', personPho: '18210919305', },
    ];

    return {
      items: item,
      person: persons
    };



  }
}

