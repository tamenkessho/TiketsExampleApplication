import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}

export class Ticket {
  constructor(title: string, description: string, status: boolean, ID: number, dateTime: string) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.ID = ID;
    this.dateTime = dateTime;
  }

  public title: string;
  public description: string;
  public status: boolean;
  public ID: number;
  public dateTime: string;

  static toString(t: Ticket){return t.ID+t.title+t.description+t.dateTime+t.status}
}
