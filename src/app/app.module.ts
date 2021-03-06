import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TimelineComponent } from './timeline/timeline.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { DeviceDetectorModule } from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    DeviceDetectorModule.forRoot(),
    MglTimelineModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
