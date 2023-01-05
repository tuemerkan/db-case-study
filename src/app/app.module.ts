import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RidesComponent } from './rides/rides.component';
import { RideListComponent } from './rides/ride-list/ride-list.component';
import { RideItemComponent } from './rides/ride-list/ride-item/ride-item.component';
import { RideService } from './rides/ride.service';
import { CommonModule } from '@angular/common';
import { RideFilterButtonComponent } from './rides/ride-list/ride-filter/ride-filter-button/ride-filter-button.component';
import { RideFilterComponent } from './rides/ride-list/ride-filter/ride-filter.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [
    AppComponent, 
    HeaderComponent,
    RidesComponent,
    RideListComponent,
    RideItemComponent,
    RideListComponent,
    RideFilterButtonComponent,
    RideFilterComponent,
  ],
  providers: [RideService],
  bootstrap: [AppComponent],
})
export class AppModule {}
