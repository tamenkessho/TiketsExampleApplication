import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ticket} from "./data.service";
@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private http: HttpClient) { }

  askForTickets() { // I just return subscriptions. It helps reduce DATA service code
    return this.http.get<Ticket[]>("http://localhost:8099/nag/storage/tickets") }

  saveUpdatedTickets(tickets: Ticket[]) { //I like JS usage of JSON. Put request to the DB
    this.http.put("http://localhost:8099/nag/storage/upload/tickets", tickets).subscribe() }
}
