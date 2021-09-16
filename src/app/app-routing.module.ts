import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component'
import { NewBookingComponent } from './new-booking/new-booking.component';

const routes: Routes = [
  { path: 'bookings', component: BookingsComponent },
  { path: 'new', component: NewBookingComponent },
  { path: '', redirectTo: 'new', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
