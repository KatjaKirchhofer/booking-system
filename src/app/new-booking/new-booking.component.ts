import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

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
  showBookings = false;

  booking = {
    id: '',
    name: '',
    class: '',
    experience: '',
    date: Date
  };

  allBookingIds: [];
  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
    this.createNewId();
    

  }
  createNewId() {
    this.firestore
    .collection('bookings')
    .valueChanges({ idField: 'customIdName'})
    .subscribe((changes: any) =>{
      this.allBookingIds = changes;
      console.log('allIds:', this.allBookingIds)
      // console.log('customNameId:', changes[1]['customIdName'])

    })

    // this.id = this.id + Math.floor(Math.random()*10)
  }

  saveBooking() {
    
   //let bookingToJson = this.booking.toJson()
    console.log(this.booking);
    this.firestore
    .collection('bookings')
    .add(this.booking)
    .then(()=>{
      
      console.log(this.booking);
      this.router.navigateByUrl('/bookings');
    })
    .catch(error =>{
      console.log(error);
    });
   

    
  }
   
  
  
 
}

