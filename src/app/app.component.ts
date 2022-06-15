import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NAGTicketsApplication';
  addingMenuStatus = false; //appearing menus
  manageDataStatus = false;
  text1: string = "Adding menu";
  text2: string = "Manage data";

  addingMenuOpen() { //opens menu1, closes menu2
    this.addingMenuStatus = !this.addingMenuStatus
    this.manageDataStatus = false
    this.text2 = "Manage data"
    if (this.addingMenuStatus) {
      this.text1 = "Close menu"
    } else {
      this.text1 = "Adding menu"
    }
  }

  manageDataOpen() { //does the opposite
    this.manageDataStatus = !this.manageDataStatus
    this.addingMenuStatus = false
    this.text1 = "Adding menu"
    if (this.manageDataStatus) {
      this.text2 = "Close menu"
    } else {
      this.text2 = "Manage data"
    }
  }
}
