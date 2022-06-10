import {Component} from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent {
  constructor(protected dataservice: DataService) {
  }
}
