import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {
  ArrowUpCircle,
  ArrowDownCircle,
  User,
  Calendar,
} from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';

const icons = {
  ArrowUpCircle,
  ArrowDownCircle,
  User,
  Calendar,
};

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, FeatherModule.pick(icons)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FeatherModule],
})
export class AppModule {}
