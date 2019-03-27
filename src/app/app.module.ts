import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationsService } from './applications.service';
import {ShContextMenuModule} from 'ng2-right-click-menu';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    ApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShContextMenuModule
  ],
  providers: [
    ApplicationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
