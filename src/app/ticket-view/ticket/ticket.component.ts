import {Component, Input, OnInit} from '@angular/core';
import {DataService, Ticket} from "../../data.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent{

  @Input('ticket')
  ticket!: Ticket;
  @Input('ticketNumber')
  ticketNumber!: number;

  constructor(private data: DataService) {}


  deleteTicket() {
    this.data.deleteTicket(this.ticket)
  }
}
