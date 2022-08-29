import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './components/city/city.component';
import { TilePageComponent } from './components/tile-page/tile-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { City2Component } from './components/city2/city2.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    City2Component,
    TilePageComponent,
    ListPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
