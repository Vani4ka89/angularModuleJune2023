import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

import {ICar} from "../../interfaces";
import {CarService} from "../../services";

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() car: ICar;

  constructor(private carService: CarService) {
  }

  update(): void {
    this.carService.setCarForUpdate(this.car);
  }

  delete() {
    this.carService.deleteById(this.car.id).subscribe(() => {
      this.carService.setTrigger();
    });
  }
}
