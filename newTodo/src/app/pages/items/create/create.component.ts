import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { ItemsFormService } from 'src/app/services/items-form.service';
import { Items } from 'src/app/models/item';
import { selectForm } from 'src/app/store/root.select';
import { ROOTState } from 'src/app/store/root.state';
import { FORMCHANGE, FormItem, FORMRESET } from 'src/app/store/action/items-form.action';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createFrom = this.fb.group({
    itemName: ['', Validators.required],
    itemType: ['', Validators.required],
    itemDate: ['', Validators.required],
    itemPerson: ['', Validators.required],
    itemPriority: [''],
    itemState: [''],
    itemReamkes: [''],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private itemService: ItemsFormService,
    private store: Store<ROOTState>
  ) {
    this.store.pipe(select(selectForm)).subscribe(data => {
      this.createFrom.patchValue(data);
    });
    this.createFrom.valueChanges.pipe(debounceTime(0)).subscribe(
      data => {
        const formItem: FormItem = {
          item: data,
          path: []
        };
        this.store.dispatch(FORMCHANGE(formItem));
      }

    );
  }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['/home']);
  }
  onSubmit() {
    this.createFrom.valid ? this.addItem() : this.errorMessage();
  }
  onReset() {
    this.createFrom.reset();
  }
  addItem() {
    this.createFrom.patchValue({ itemState: '待办' });
    this.itemService.create(this.createFrom.value as Items).subscribe(
      data => {
        this.createFrom.reset();
        this.store.dispatch(FORMRESET());
        this.router.navigate(['/waitFor']);
      }
    );
  }
  errorMessage() {
    alert('请填写完整');
  }

}
