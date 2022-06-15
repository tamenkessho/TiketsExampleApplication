import {Component, Input} from '@angular/core';
import {DataService, Ticket} from "../../services/data.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent{

  @Input('ticket')  //two input fields to store and show data correctly. Nothing special
  ticket!: Ticket;
  @Input('ticketNumber')
  ticketNumber!: number;

  constructor(private data: DataService) {}

  deleteTicket() {
    this.data.deleteTicket(this.ticket) // Banzai! Ticket is born with Cyanide-tooth nevermind
  }
}
