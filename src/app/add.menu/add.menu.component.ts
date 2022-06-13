import {Component} from '@angular/core';
import {DataService, Ticket} from "../data.service";
import {DateTime} from 'luxon';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add.menu.component.html',
  styleUrls: ['./add.menu.component.css']
})
export class AddMenuComponent {
  ticketStatus!: boolean;

  constructor(private data: DataService) {
  }

  saveTicket(title: any, description: any, status: any) {

    this.data.appendTicket(new Ticket(

      title.value,
      description.value,
      this.ticketStatus,
      this.data.getUniqId(),
      DateTime.now().toFormat('HH:mm:ss / MMMM dd, yyyy')
    ))
  }
}
