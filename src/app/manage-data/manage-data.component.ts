import {Component, OnInit} from '@angular/core';
import {DataService, Ticket} from "../data.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent implements OnInit {

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
  }

  downloadData() {this.data.downloadData()
  }

  uploadData() {
  }

  cleanData() {
    this.data.cleanArray()
  }
}
