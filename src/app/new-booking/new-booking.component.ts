import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent implements OnInit {
  id = 100;
  name = 'nameInput';
  class = '';
  experience = '';
  date: any;

  booking = {
    id: '',
    name: '',
    class: '',
    experience: '',
    date: Date
  };
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.createNewId();
    

  }
  createNewId() {
    this.id = this.id + Math.floor(Math.random()*10)
  }

  saveBooking() {
    
   //let bookingToJson = this.booking.toJson()
    console.log(this.booking);
    this.firestore
    .collection('bookings')
    .add(this.booking)
    
  }
   
  
  
 
}

