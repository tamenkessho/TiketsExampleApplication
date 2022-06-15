import {Component} from '@angular/core';
import {DataService, Ticket} from '../data.service'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent {
  constructor(public dataservice: DataService) {
  }

  drop(event: CdkDragDrop<Ticket[]>) {
    // @ts-ignore
    let currentTicketIndex = event
      .item.element.nativeElement
      .children.item(0)
      .firstChild.firstChild
      .firstChild.firstChild
      .textContent;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      if(event.container.element.nativeElement.className.includes('processing-list')){
        this.dataservice.moveTicket(Number(currentTicketIndex), 'processing')
      }
      else if(event.container.element.nativeElement.className.includes('todo-list')){
        this.dataservice.moveTicket(Number(currentTicketIndex), 'todo')
      }
      else if(event.container.element.nativeElement.className.includes('finished-list')){
        this.dataservice.moveTicket(Number(currentTicketIndex), 'finished')
      }
    }
  }
}
