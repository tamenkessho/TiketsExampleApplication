import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public array: Ticket[] = [
    new Ticket(
      "I require help with email",
      "I really need help with my new email address right now. New NAG email doesn't work properly.",
      true,
      52,
      "March 17, 2005"
    ),
    new Ticket(
      "Require NgRx support",
      "HEYYY SOUFIAN! GUESS WHAT? YESSS I AGAIN CAN'T DEAL WITH NGRX. Heeelp me, mate!",
      false,
      38,
      "May 19, 2022"
    )
  ]

  constructor(private client: HttpClient) {
  }

  deleteTicket(index: number) {
    this.array.splice(index, 1);
  }

  appendTicket(ticket: Ticket) {
    this.array.push(ticket);
  }

  getUniqId() {
    return this.array.length;
  }

  cleanArray() {
    this.array.splice(0);
  }

  downloadData(httpArray: Ticket[]) {
    this.array = httpArray;
    console.log("Data updated");
    console.log(this.array)
  }
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
