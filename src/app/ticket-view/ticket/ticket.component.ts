import {Component, Input, OnInit} from '@angular/core';
import {DataService, Ticket} from "../../data.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

  @Input('ticket')
  ticket!: Ticket;
  @Input('ticketNumber')
  ticketNumber!: number;

  constructor(private data: DataService) {}


  deleteTicket() {
    this.data.deleteTicket(this.ticket)
    console.log("ticket " +
      this.ticketNumber +
      " deleted")
  }

  ngOnInit(): void {
    console.log(this.ticket + " "+ this.ticketNumber+" initialized")
  }
}
