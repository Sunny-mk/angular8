import { Observable } from 'rxjs';

export class Dashboard {

  constructor(
    public type: string,
    public number$: Observable<number>
  ) {
    this.type = type;
    this.number$ = number$;
  }

}
