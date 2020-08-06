import { Component, OnInit, Input } from '@angular/core';
import { contactService } from 'src/app/service/contact-service';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html'
})
export class MailComponent implements OnInit {

  
@Input()
option:string;

mail:any;
order:any;


  constructor(private contactService: contactService) { }

  ngOnInit(): void {

    this.contactService.get_contact().subscribe( data => {
        this.order = data.filter(
          data => data.payload.doc.data()['message'] ==null && data.payload.doc.data()['name'] !=null
        )
        .map( e =>{
          return{
            id: e.payload.doc.id,
            name: e.payload.doc.data()['name'],
            phone: e.payload.doc.data()['phone'],
            address: e.payload.doc.data()['address'],
            time:e.payload.doc.data()['time'].toDate(),
            description1: e.payload.doc.data()['description1'],
            description2: e.payload.doc.data()['description2'],
            description3: e.payload.doc.data()['description3'],
            description4: e.payload.doc.data()['description4'],
            description5: e.payload.doc.data()['description5']



          }
        }),

        this.mail = data.filter(
          data => data.payload.doc.data()['message'] !=null && data.payload.doc.data()['name'] !=null
        )
        .map( e =>{
          return{
            id: e.payload.doc.id,
            name: e.payload.doc.data()['name'],
            phone: e.payload.doc.data()['phone'],
            address: e.payload.doc.data()['address'],
            time:e.payload.doc.data()['time'].toDate(),
            message:e.payload.doc.data()['message']
            


          }
        })


    })

  }

}
