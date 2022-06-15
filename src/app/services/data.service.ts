import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {  //Massive service holding all data
  public array: Ticket[] = []; // Our MOST important array
  var = this.http.askForTickets().subscribe(next => this.array = next) //preload tickets from the db on start
  constructor(private http: HttpService) {}

  deleteTicket(ticket: Ticket) { this.array.splice(this.array.indexOf(ticket), 1) } //delete ticket from front, not db

  appendTicket(ticket: Ticket) { this.array.push(ticket) } //adds new ticket

  cleanArray() { this.array.splice(0) } //resets page

  uploadData() { this.http.saveUpdatedTickets(this.array) } //cause uploading to backend

  downloadData() { this.http.askForTickets().subscribe(next => this.array = next) } //method, which set main array from db


  moveTicket (currentTicketIndex: number, newGroup: string) { //this method used to formally move ticket from one group to another
    for ( let i = 0; i < this.array.length; i++ ) {
      if ( this.array[i].ID == currentTicketIndex ) //finds the right one and edits
      { this.array[i].group = newGroup } } }

                    //pretty huge way to get new id, which will be unique. At least it is logical
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
}
                          //that's how ticket should look like
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
