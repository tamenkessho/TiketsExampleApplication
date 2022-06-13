import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public array: Ticket[] = [];

  constructor(private http: HttpService) { }

  deleteTicket(index: number) { this.array.splice(index, 1) }

  appendTicket(ticket: Ticket) { this.array.push(ticket) }

  cleanArray() { this.array.splice(0) }

  uploadData() {
    this.http.saveUpdatedTickets(this.array);
    console.log("Data saved to DB") }

  downloadData() {
    this.http.askForTickets().subscribe(next => this.array = next)
    console.log("Data updated");
    console.log(this.array) }

  getUniqId() {
    let biggestID = 0;
    for (let ticket of this.array) {
      let iterableID = ticket.ID;
      if(iterableID>biggestID){
        biggestID = iterableID;
      }
    }
    return biggestID+1 }
  var = this.http.askForTickets().subscribe(next => this.array = next)
}

export class Ticket {
  public title: string;
  public description: string;
  public status: boolean;
  public ID: number;
  public dateTime: string;

  constructor(title: string, description: string, status: boolean, ID: number, dateTime: string) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.ID = ID;
    this.dateTime = dateTime;
  }

  static toString(t: Ticket) {
    return t.ID + t.title + t.description + t.dateTime + t.status
  }
}
