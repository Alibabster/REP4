import {
  Input,
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, OnDestroy
} from '@angular/core';
// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-form-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})

export class ReportComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() govAg = '';
  @Input() participants = '';
  @Input() description = '';
  @Input() proving = '';
  today = Date.now();
  text = 'Your report:';
  msg = 'Welcome to Angular 2';
  constructor() {
    console.log('AppComponent:Constructor');
  }

  ngAfterContentChecked(): void {
    console.log('AppComponent:AfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('AppComponent:AfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('AppComponent:AfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('AppComponent:AfterViewInit');
  }

  ngDoCheck(): void {
    console.log('AppComponent:DoCheck');
  }

  ngOnChanges(): void {
    console.log('AppComponent:OnChanges');
  }

  ngOnDestroy(): void {
    console.log('AppComponent:OnDestroy');
  }

  ngOnInit(): void {
    console.log('AppComponent:OnInit');
  }
}
