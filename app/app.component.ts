import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
 template: `<input type="date" [valueAsDate]="testDate_valueAsDate" (change)="onChange($event.target.valueAsDate)" /><h2>testDate_valueAsDate={{testDate_valueAsDate}}</h2>
`
})
export class AppComponent {
  testDate_valueAsDate = new Date(2016, 2, 15);

  onChange(newDate: Date) {
    if(newDate != null) {
      this.testDate_valueAsDate = newDate;
    }
  }
}