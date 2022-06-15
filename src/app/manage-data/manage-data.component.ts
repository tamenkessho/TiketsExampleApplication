import {Component} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent {
  //I love the way it is simple. Holds data management methods
  constructor(private data: DataService) { }
  downloadData() { this.data.downloadData() }
  uploadData() { this.data.uploadData() }
  cleanData() { this.data.cleanArray() }
}
