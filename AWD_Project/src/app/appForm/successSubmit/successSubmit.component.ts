import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';



// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-form-success',
  templateUrl: './successfulSubmit.component.html',
  styleUrls: ['./successfulSubmit.component.css'],
})

export class SuccessSubmitComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  items = ['Service Centre', 'Tax Committee', 'Security Committee', 'EGov'];
  mark: number;
  percentage = 0.05;
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
