import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1><label><input type="checkbox" [(ngModel)]="testCheckbox" />Test Checkbox</label><h2>Checked={{testCheckbox}}</h2>`
})
export class AppComponent {
  testCheckbox = true;
}