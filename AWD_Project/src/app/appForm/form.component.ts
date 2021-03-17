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
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  govAg: string;
  participants: string;
  description: string;
  proving: string;
  display = false;
  value: boolean;
  constructor() {
    console.log('AppComponent:Constructor');
  }

  // tslint:disable-next-line:typedef
  toggle(): boolean{
    this.value = !this.value;
    return this.value;
  }

  successfulSubmit(): void {
    this.display = !this.display;
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
