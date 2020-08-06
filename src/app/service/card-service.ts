import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class Service{

    constructor(public fireservices:AngularFirestore) { }

  create_cards(Record)
  {
    return this.fireservices.collection('Cards').add(Record);
  }

  get_cards()
  {
    return this.fireservices.collection('Cards').snapshotChanges();
  }

  update_cards(recordid, record)
  {
    this.fireservices.doc('Cards/' + recordid).update(record);
  }

  delete_cards(record_id)
  {
    this.fireservices.doc('Cards/' + record_id).delete();
  }
}