import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {AddMenuComponent} from "./add.menu/add.menu.component";
import { ManageDataComponent } from './manage-data/manage-data.component';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { TicketComponent } from './ticket-view/ticket/ticket.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AddMenuComponent,
    ManageDataComponent,
    TicketViewComponent,
    TicketComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
