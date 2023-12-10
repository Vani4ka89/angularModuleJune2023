import {Component, OnInit} from '@angular/core';
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent implements OnInit {
  count: number;

  constructor(private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.counterService.getCount().subscribe(value => this.count = value)
  }


}
