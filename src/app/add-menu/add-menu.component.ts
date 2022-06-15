import {Component} from '@angular/core';
import {DataService, Ticket} from "../services/data.service";
import {DateTime} from 'luxon';
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  ticketStatus!: boolean;

  constructor(private data: DataService) { }

  saveTicket(title: any, description: any) { //Mess data never goes deeper, than this component
    this.data.appendTicket( //It trigger a method
      new Ticket( //And already throws factory new Ticket in it
        title.value,
        description.value,
        this.ticketStatus,
        this.data.getUniqId(),
        DateTime.now().toFormat('HH:mm:ss / MMMM dd, yyyy'), //Current time
        'todo'
      )
    )
  }
}
