import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public array: Ticket[] = [];
  var= this.http.askForTickets().subscribe(next => this.array = next)

  constructor(private http: HttpService) {
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

  downloadData() {
    this.http.askForTickets().subscribe(next => this.array = next)
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
