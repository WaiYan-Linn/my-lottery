import { Component, OnInit, Input } from '@angular/core';

import { Service } from '../../service/card-service'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})

export class CrudComponent implements OnInit {

@Input()
option:string;

sheet: any;
description1:string;
description2:string;
description3:string;
description4:string;
description5:string;
order:number=0;

constructor(public crudservice: Service){}

ngOnInit() {
    this.crudservice.get_cards().subscribe(data => {

      this.sheet = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          title: e.payload.doc.data()['title'],
          description1: e.payload.doc.data()['description1'],
          description2: e.payload.doc.data()['description2'],
          description3: e.payload.doc.data()['description3'],
          description4: e.payload.doc.data()['description4'],
          description5: e.payload.doc.data()['description5'],
          order: e.payload.doc.data()['order']

        };
      })
      

    });
  }

  create_cards()
  {
    let Record = {};
    Record['description1'] = this.description1;
    Record['description2'] = this.description2;
    Record['description3'] = this.description3;
    if(this.description4!=null){
      Record['description4'] = this.description4;
    }
    if(this.description5!=null){
      Record['description5'] = this.description5;
    }
    Record['order']=this.order;
   

    this.crudservice.create_cards(Record).then(res => {

        this.description1 ="";
        this.description2 ="";
        this.description3 ="";
        this.description4 ="";
        this.description5 ="";
        this.order=0;

        console.log(res);
    }).catch(error => {
      console.log(error);
    });
    
  }

  edit_cards(Record)
  {
    Record.istitle= Record.title;
    Record.isedit = true;
    Record.editdescription1 = Record.description1;
    Record.editdescription2 = Record.description2;
    Record.editdescription3 = Record.description3;
    Record.editdescription4 = Record.description4;
    Record.editdescription5 = Record.description5;
    Record.editorder = Record.order;
}

  update_cards(recorddata)
  {
    let record = {};
    record['description1'] = recorddata.editdescription1;
    record['description2'] = recorddata.editdescription2;
    record['description3'] = recorddata.editdescription3;
    if(recorddata.editdescription4!=null){
      record['description4'] = recorddata.editdescription4;
    }
    if(recorddata.editdescription5!=null){
      record['description5'] = recorddata.editdescription5;
    }
    record['order']  = recorddata.editorder;

    this.crudservice.update_cards(recorddata.id, record);
    recorddata.isedit = false;
  }

  delete_cards(record_id)
  {
    this.crudservice.delete_cards(record_id);
  }

  


}