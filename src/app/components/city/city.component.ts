import { Component, Input } from '@angular/core';
import { ICity } from '../../models/citys';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent {
  @Input() city: ICity;
}
