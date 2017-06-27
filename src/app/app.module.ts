import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { headerComponent } from 'app/header.component';
import { bodyComponent } from 'app/body.component';
import { footerComponent } from 'app/footer.component';


@NgModule({
  declarations: [AppComponent,
 headerComponent,bodyComponent,footerComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
