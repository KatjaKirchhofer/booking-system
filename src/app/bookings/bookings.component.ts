import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
//import { Booking } from '../booking';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(public bookingsService: BookingService, private firestore: AngularFirestore) { }

  bookings: Observable<any>;

  ngOnInit(): void {
    this.bookings = this.firestore
    .collection('bookings')
    .valueChanges()
  }

}
