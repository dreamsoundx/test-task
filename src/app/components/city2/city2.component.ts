import { Component, Input } from '@angular/core';
import { ICity } from '../../models/citys';

@Component({
  selector: 'app-city2',
  templateUrl: './city2.component.html',
  styleUrls: ['./city2.component.scss'],
})
export class City2Component {
  @Input() city2: ICity;
}
