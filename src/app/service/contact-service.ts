import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class contactService{

    constructor(public fireservices:AngularFirestore) { }

  create_contact(Record)
  {
    return this.fireservices.collection('Contact').add(Record);
  }

  get_contact()
  {
    return this.fireservices.collection('Contact').snapshotChanges();
  }

  update_contact(recordid,record){
    this.fireservices.doc('Contact/' + recordid).update(record);
  }

  
}