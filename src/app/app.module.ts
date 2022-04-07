import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/******MATERIAL*****/
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule,} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatIconModule,} from '@angular/material/icon'
import {MatProgressSpinnerModule,} from '@angular/material/progress-spinner'
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatBadgeModule } from '@angular/material/badge'
/***********/
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { OkrComponent } from './okr/okr.component';
import { ObjectiveComponent } from './okr/objective/objective.component';
import { KeyresultComponent } from './okr/keyresult/keyresult.component';
import { DropdownTogglerComponent } from './appassets/dropdown-toggler/dropdown-toggler.component';

const material =[
  MatSidenavModule, //sidenav
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatBadgeModule
]



@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    OkrComponent,
    ObjectiveComponent,
    KeyresultComponent,
    DropdownTogglerComponent,

  ],
  imports: [
    material,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  