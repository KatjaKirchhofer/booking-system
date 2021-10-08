import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from '../booking';
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
    .valueChanges({ idField: 'customIdName'})
   

   
    console.log(this.bookings);

  
  }

  // getId() {
  //   const ref= this.firestore.collection('bookings')
  //   console.log('ref:', ref)
  //   return ref.valueChanges({idField: 'customIdName'})

  // }

  deleteBooking(bookingID: any) {
    console.log(bookingID)
    this.firestore
                  .collection("bookings")
                  .doc(bookingID)
                  .delete()
                  .then(()=>{
                    console.log("Booking Deleted:", bookingID)
                  })
                  .catch((error) => {
                      console.log(error);
                  })

  
  


    // return (
    //   console.log(id),
    //   this.firestore
    //       .collection('bookings', ref => ref.where('id', '==', ${id}))
    //       .snapshotChanges().pipe(
    //           map(actions => actions.map(a => {
    //               const id = a.payload.doc.id;
    //               return { id };
    //           })))
    //       .subscribe(documentId=> {
    //           this.firestore
    //               .collection("bayonete")
    //               .doc<CutiteInterface>(documentId)
    //               .delete()
    //               .catch((error) => {
    //                   console.log(error);
    //               })
    //       });
    // );
}
  

}
