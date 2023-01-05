import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ride-filter-button',
  templateUrl: './ride-filter-button.component.html',
  styleUrls: ['./ride-filter-button.component.css'],
})
export class RideFilterButtonComponent {
  @Input() type: 'from' | 'to';
  @Input() filter: string;
  @Input() active: boolean = false;
  typeGerman = {from: 'von', to: 'nach'}
  
}
