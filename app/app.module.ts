import { NgModule }      from '@angular/core';
import { WorkerAppModule } from '@angular/platform-webworker';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ WorkerAppModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
