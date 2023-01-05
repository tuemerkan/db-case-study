import { EventEmitter, Injectable } from '@angular/core';
import { Ride } from './ride.model';

@Injectable()
export class RideService {
  ridesFilterChanged = new EventEmitter<Ride[]>();

  private rides: Ride[] = [
    new Ride('Hamburg', 'Frankfurt', '01/01/2022 11:20', '01/01/2022 17:10'),
    new Ride('Frankfurt', 'Mannheim', '01/01/2022 15:10', '01/01/2022 17:30'),
    new Ride('Frankfurt', 'Stuttgart', '01/01/2022 18:40', '01/01/2022 20:55'),
    new Ride('Köln', 'Frankfurt', '01/01/2022 19:20', '01/01/2022 21:10'),
    new Ride('Nürnberg', 'Ingolstadt', '01/01/2022 20:40', '01/01/2022 21:50'),
    new Ride('Köln', 'Nürnberg', '01/01/2022 22:50', '01/02/2022 01:30'),
    new Ride('Frankfurt', 'Nürnberg', '01/01/2022 23:40', '01/02/2022 00:45'),
  ];

  constructor() {}

  getRides() {
    return this.rides.slice();
  }

  getRide(index: number) {
    return this.rides[index];
  }

  filterRides(type: 'from' | 'to', filter: string) {
    let filteredRides: Ride[];
    filteredRides = this.rides.filter((ride) => ride[type] === filter);
    this.ridesFilterChanged.emit(filteredRides);
  }

  resetFilterRides() {
    this.ridesFilterChanged.emit(this.rides);
  }
}
