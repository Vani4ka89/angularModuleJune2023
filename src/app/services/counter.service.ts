import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = new BehaviorSubject<number>(0);

  constructor() {
  }

  inc(): void {
    this.count.next(this.count.value + 1);
  }

  dec(): void {
    this.count.next(this.count.value - 1);
  }

  reset(): void {
    this.count.next(0);
  }

  getCount(): Observable<number> {
    return this.count.asObservable();
  }

}
