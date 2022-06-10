import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ticket} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  askForTickets() {
    return this.http.get<Ticket[]>("http://localhost:8099/nag/storage/tickets");
  }
}
