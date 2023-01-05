import { Component, Input, OnInit } from '@angular/core';
import { Ride } from '../../ride.model';

@Component({
  selector: 'app-ride-item',
  templateUrl: './ride-item.component.html',
  styleUrls: ['./ride-item.component.css'],
})
export class RideItemComponent implements OnInit {
  @Input() ride: Ride;
  @Input() index: number;
  starttime: string;
  endtime: string;
  duration: string;

  constructor() {}

  ngOnInit(): void {
    this.starttime = this.formatDate(this.ride.starttime, {
      hour: 'numeric',
      minute: '2-digit',
    });
    this.endtime = this.formatDate(this.ride.endtime, {
      hour: 'numeric',
      minute: '2-digit',
    });
    this.duration = this.formatDuration(
      this.ride.endtime.getTime() - this.ride.starttime.getTime()
    );
  }

  private formatDate(date: Date, options: Intl.DateTimeFormatOptions): string {
    return date.toLocaleTimeString(undefined, options);
  }

  private formatDuration(durationMillisecs: number): string {
    const hours = Math.floor(durationMillisecs / 3600000);
    const minutes = Math.floor((durationMillisecs % 3600000) / 60000);
    return `${hours}h ${minutes}min`;
  }
}
