import {Component, Input, OnInit} from '@angular/core';
import {DataService, Ticket} from "../../data.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input()
  ticket!: Ticket;
  @Input()
  ticketNumber!: number;

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    console.log(this.ticket)
  }


  // returnUpdatedTicket(status: any, title: any, description: any) {
  //   console.log(new Ticket(title.value, description.value, this.ticket.status, this.ticket.ID, this.ticket.dateTime))
  // }
  deleteTicket() {
    this.data.deleteTicket(this.ticketNumber)
  }
}
