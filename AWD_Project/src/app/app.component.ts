import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title;


  constructor() {}

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
    this.title = 'Bounty Hunter' ;
    console.log('AppComponent:OnInit');
  }


}
