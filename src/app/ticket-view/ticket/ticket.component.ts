import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../../data.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input()
  ticket!: Ticket;
  constructor() { }

  ngOnInit(): void {
    console.log(this.ticket)
  }

}
