import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DengueService } from './services/dengue.service';
import { DengueModule } from './cards/dengue/dengue.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DengueModule
  ],
  providers: [DengueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
