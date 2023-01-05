import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ride } from '../../ride.model';
import { RideService } from '../../ride.service';

@Component({
  selector: 'app-ride-filter',
  templateUrl: './ride-filter.component.html',
  styleUrls: ['./ride-filter.component.css'],
})
export class RideFilterComponent {
  rideFilterButtons: { type: 'from' | 'to'; filter: string }[] = [
    { type: 'from', filter: 'Frankfurt' },
    { type: 'to', filter: 'Frankfurt' },
  ];
  activeButtonIndex: number | null;

  @Output() filteredRidesChange = new EventEmitter<Ride[]>();

  constructor(private rideService: RideService) {}

  onClick(type: 'from' | 'to', filter: string, buttonIndex: number) {
    if (this.activeButtonIndex === buttonIndex) {
      this.rideService.resetFilterRides();
      this.activeButtonIndex = null;
    } else {
      this.rideService.filterRides(type, filter);
      this.activeButtonIndex = buttonIndex;
    }
  }
}
