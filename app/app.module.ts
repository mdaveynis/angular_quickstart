import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkerAppModule } from '@angular/platform-webworker';
import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ WorkerAppModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
