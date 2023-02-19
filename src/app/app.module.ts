import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { Shop1Component } from './shop1/shop1.component';

@NgModule({
  declarations: [
    AppComponent,
    OffcanvasComponent,
    Shop1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
