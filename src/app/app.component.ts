import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:DataService) {}

  title = 'NAGTicketsApplication';
  addingMenuStatus = false;
  manageDataStatus = false;
  text1: string = "Adding menu";
  text2: string = "Manage data";

  addingMenuOpen() {
    this.addingMenuStatus = !this.addingMenuStatus
    this.manageDataStatus = false
    this.text2 = "Manage data"
    if(this.addingMenuStatus){
      this.text1 = "Close menu"
    } else {this.text1 = "Adding menu"}

  }
  manageDataOpen() {
    this.manageDataStatus = !this.manageDataStatus
    this.addingMenuStatus = false
    this.text1 = "Adding menu"
    if(this.manageDataStatus){
      this.text2 = "Close menu"
    }else{this.text2 = "Manage data"}
  }
}
