import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { PageEvent } from '@angular/material';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import * as moment from 'moment';
import { MainService } from '@app/service/main.service';

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

@Component({
  selector: 'anms-human-position-history',
  templateUrl: './human-position-history.component.html',
  styleUrls: ['./human-position-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HumanPositionHistoryComponent implements OnInit {
  pageEvent: PageEvent;

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  reloadTable = true;
  showDateFrom;
  showDateTo;
  data;
  dataSource;
  objectKeys = Object.keys;
  panelOpenState = false;

  displayedColumns = [
    'id',
    'commtrac_external_id',
    'company_id',
    'date',
    'value',
    'battery_voltage',
    'external_voltage',
    'type',
    'units',
    'callibration_date',
    'sensor_serial_number',
    'alarm',
    'module_absent',
    'module_warning',
    'point1_tripped',
    'point2_tripped',
    'stel_alarm',
    'twa_alarm',
    'fault',
    'pellister_over',
    'input1',
    'input2',
    'output1',
    'output2',
    'power_source',
    'mysqlId'
  ];

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  date: Date = new Date();

  settings = {
    bigBanner: true,
    timePicker: true,
    defaultOpen: false
  };

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex = 0;

  dataOptions = {
    start: this.pageIndex,
    length: this.pageSize,
    draw: 1
  };

  dateObject = moment('1395-11-22', 'YYYY,MM,DD');

  newDateFrom;
  newDateto;

  constructor(
    private mainService: MainService,
    private chRef: ChangeDetectorRef
  ) {
    mainService.comtrackEvents(this.dataOptions).subscribe(data => {
      this.data = data;
      console.log(data);
      this.dataSource = this.data.data;
      this.displayedColumns = this.objectKeys(this.data.data[0]);
      console.log(this.displayedColumns, 'displayedColumns');
      console.log(this.dataSource, 'dataSource');

      this.chRef.detectChanges();
    });
    setTimeout(() => {
      this.chRef.detectChanges();
    }, 1000);
  }

  getPaginatorData(event) {
    console.log(event);

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.dataOptions = {
      start: this.pageIndex,
      length: this.pageSize,
      draw: 1
    };

    this.mainService.comtrackEvents(this.dataOptions).subscribe(data => {
      this.data = data;

      this.dataSource = this.data.data;
      // this.displayedColumns = this.objectKeys(this.data.data[0])
    });
    setTimeout(() => {
      this.chRef.detectChanges();
    }, 1000);
  }

  onDateFromSelect() {
    this.newDateFrom = moment(this.date).format('MM/DD/YYYY hh:mm');
    this.showDateFrom = false;
  }

  onDateToSelect() {
    this.newDateto = moment(this.date).format('MM/DD/YYYY hh:mm');
    this.showDateTo = false;
  }

  ngOnInit() {}
}
