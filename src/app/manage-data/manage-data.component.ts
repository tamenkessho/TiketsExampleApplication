import {Component, OnInit} from '@angular/core';
import {DataService, Ticket} from "../data.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent implements OnInit {

  constructor(private data: DataService, private client: HttpClient) {
  }

  ngOnInit(): void {
  }

  downloadData() {
    this.client.get<Ticket[]>("http://localhost:8099/nag/storage/tickets").subscribe(newArray => {
      console.log(newArray);
      this.data.downloadData(newArray)
    })
  }

  uploadData() {
  }

  cleanData() {
    this.data.cleanArray()
  }
}
