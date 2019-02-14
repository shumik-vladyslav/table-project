import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumanPositionHistoryComponent } from './pages/human-position-history/human-position-history.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule,

    // material
    MatPaginatorModule,
    MatTableModule,
    MatExpansionModule,
    MatDatepickerModule,

    // dateTimePicker
    DpDatePickerModule,
    AngularDateTimePickerModule
  ],
  declarations: [AppComponent, HumanPositionHistoryComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
