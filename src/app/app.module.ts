import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ArrowUpCircle,
  ArrowDownCircle,
  User,
  Calendar,
} from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';
import { MenuComponent } from './common/menu/menu.component';
import { MainLayoutComponent } from './common/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { DriversPageComponent } from './drivers-page/drivers-page.component';

const icons = {
  ArrowUpCircle,
  ArrowDownCircle,
  User,
  Calendar,
};

@NgModule({
  declarations: [AppComponent, MenuComponent, MainLayoutComponent, MainPageComponent, SchedulePageComponent, DriversPageComponent],
  imports: [BrowserModule, AppRoutingModule, FeatherModule.pick(icons)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FeatherModule],
})
export class AppModule {}
