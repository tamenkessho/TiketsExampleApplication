import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public array: Ticket[] = [];
  var = this.http.askForTickets().subscribe(next => this.array = next)

  constructor(private http: HttpService) {
  }

  deleteTicket(ticket: Ticket) {
    this.array.splice(this.array.indexOf(ticket), 1)
  }

  appendTicket(ticket: Ticket) {
    this.array.push(ticket)
  }

  cleanArray() {
    this.array.splice(0)
  }

  uploadData() {
    this.http.saveUpdatedTickets(this.array);
    console.log("Data saved to DB")
  }

  downloadData() {
    this.http.askForTickets().subscribe(next => this.array = next)
    console.log("Data updated");
    console.log(this.array)
  }

  getUniqId() {
    let biggestID = 0;
    for (let ticket of this.array) {
      let iterableID = ticket.ID;
      if (iterableID > biggestID) {
        biggestID = iterableID;
      }
    }
    return biggestID + 1
  }

  moveTicket(currentTicketIndex: number, newGroup: string) {
    for (let i = 0; i < this.array.length; i++) {
      if(this.array[i].ID==currentTicketIndex)
      {
        this.array[i].group = newGroup;
      }
    }
  }
}

export class Ticket {
  public title: string;
  public description: string;
  public status: boolean;
  public ID: number;
  public dateTime: string;
  public group: string;

  constructor(title: string, description: string, status: boolean, ID: number, dateTime: string, group: string) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.ID = ID;
    this.dateTime = dateTime;
    this.group = group;
  }

  static toString(t: Ticket) {
    return t.ID + t.title + t.description + t.dateTime + t.status + t.group
  }
}
