import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
 template: `<h1>My First Angular App</h1>
 <label><input type="date" [(ngModel)]="testDate_ngModel" />Test Date</label><h2>testDate_ngModel={{testDate_ngModel}}, {{testDate_ngModel_objstring}}</h2>
 <label><input type="date" [valueAsDate]="testDate_valueAsDate" (change)="onChange($event.target.valueAsDate)" />Test Date</label><h2>testDate_valueAsDate={{testDate_valueAsDate}}, {{testDate_valueAsDate_objstring}}</h2>
`
})
export class AppComponent {
  testDate_ngModel = new Date(2016, 2, 15);

  get testDate_ngModel_objstring(){
    return Object.prototype.toString.call(this.testDate_ngModel);
  }

  testDate_valueAsDate = new Date(2016, 2, 15);
  get testDate_valueAsDate_objstring(){
    return Object.prototype.toString.call(this.testDate_valueAsDate);
  }
  onChange(newDate: Date) {
    if(newDate != null) {
      this.testDate_valueAsDate = newDate;
    }
  }
}