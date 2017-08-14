import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductLijstComponent } from './product-lijst/product-lijst.component';
import { UrenLijstComponent } from './uren-lijst/uren-lijst.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductLijstComponent,
    UrenLijstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
