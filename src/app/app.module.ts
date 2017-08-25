import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductLijstComponent } from './product-lijst/product-lijst.component';
import { UrenLijstComponent } from './uren-lijst/uren-lijst.component';
import { AppRouterModule } from './app-router.module';
import {ProductenService} from './product-lijst/producten.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductLijstComponent,
    UrenLijstComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [ProductenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
