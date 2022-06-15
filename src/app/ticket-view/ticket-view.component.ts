import {Component} from '@angular/core';
import {DataService, Ticket} from '../services/data.service'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent {
  constructor(public dataservice: DataService) {
  }

  drop(event: CdkDragDrop<Ticket[]>) { //container been moved
    // @ts-ignore
    let currentTicketIndex = event  //get moved.tickets data
      .item.element.nativeElement
      .children.item(0)
      .firstChild.firstChild
      .firstChild.firstChild
      .textContent; //I swear there are no ways to make it shorter. Java script ¯\_(ツ)_/¯

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); //if container in the same list
    } else {
      transferArrayItem( //if container in another list
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex, //ensure Angular material workability. I never wrote this
      );
      if(event.container.element.nativeElement.className.includes('processing-list')){ //we also change "group" when ticket move
        this.dataservice.moveTicket(Number(currentTicketIndex), 'processing')
      }
      else if(event.container.element.nativeElement.className.includes('todo-list')){ //I know there are ways to make it shorter
        this.dataservice.moveTicket(Number(currentTicketIndex), 'todo')
      }
      else if(event.container.element.nativeElement.className.includes('finished-list')){ //but I like current readability
        this.dataservice.moveTicket(Number(currentTicketIndex), 'finished')
      }
    }
  }
}
