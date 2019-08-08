import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { ItemsFormService } from 'src/app/services/items-form.service';
import { Person } from 'src/app/models/personnel';
import { TableComponent } from 'src/app/component/table/table.component';

import { selectPerson } from 'src/app/store/root.select';
import { ROOTState } from 'src/app/store/root.state';
import { FORMCHANGE, FormSet, FORMRESET } from 'src/app/store/action/person-form.action';
@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements AfterViewInit, OnInit {
  createPerson = this.fb.group({
    personName: ['', Validators.required],
    personAge: ['', Validators.required],
    personSex: ['', Validators.required],
    personCity: ['', Validators.required],
    personPho: ['', Validators.required],
    personPro: '',
    personEmail: '',
  });
  // 切换人员创建与管理页
  createAndWaitFor = true;
  // table
  tableHeader = ['ID', '员工姓名', '员工年龄', '员工性别', '居住地', '联系方式', '员工职业', '邮箱'];
  tableData: Person[];
  checkbox = true;
  pages: number;
  total: number;
  @ViewChild(TableComponent, { static: false })
  private table: TableComponent;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private itemService: ItemsFormService,
    private store: Store<ROOTState>
  ) {
    this.store.pipe(select(selectPerson)).subscribe(
      data => {
      this.createPerson.patchValue(data);
      }
    );
    this.createPerson.valueChanges.pipe(debounceTime(0)).subscribe(
      data => {
        const fromset: FormSet = {
          item: data,
          path: []
        };
        this.store.dispatch(FORMCHANGE(fromset));
      }
    );
    }
   ngAfterViewInit(): void {

  }
  ngOnInit() {
  }

  back() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    this.createPerson.valid ? this.addPerson() : this.errorMessage();
  }

  onReset() {
    this.createPerson.reset();
  }

  addPerson() {
    this.itemService.createPerson(this.createPerson.value as Person).subscribe(
      data => {
        this.backPerson();
        alert('提交成功');
        this.createPerson.reset();
        this.itemService.getPerson().subscribe(
          item => this.tableData = item
        );
        this.store.dispatch(FORMRESET());
      }

    );
  }

  errorMessage() {
    alert('请填写完整');
  }
  backPerson() {
    this.createAndWaitFor = !this.createAndWaitFor;
  }



}
