import { Component, OnInit } from '@angular/core';
import {Ticket} from '../data.service'

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {
  tickets: Ticket[] = [new Ticket(
    "I require help with email",
    "I really need help with my new email address right now. New NAG email doesn't work properly.",
    true ,
    52,
    "17/03/2005"
  )];

  constructor() { }

  ngOnInit(): void {
  }

}







