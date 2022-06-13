import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

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
    this.data.uploadData()
  }

  cleanData() {
    this.data.cleanArray()
  }
}
