import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ride } from '../ride.model';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css'],
})
export class RideListComponent implements OnInit {
  rides: Ride[];
  subscriptionRidesFilter: Subscription; 

  constructor(private rideService: RideService) {}

  ngOnInit() {
    this.rides = this.rideService.getRides();
    this.subscriptionRidesFilter = this.rideService.ridesFilterChanged.subscribe(
      (rides: Ride[]) => {
        this.rides = rides;
      }
    );
  }
}
