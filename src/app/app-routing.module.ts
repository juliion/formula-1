import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './common/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { DriversPageComponent } from './drivers-page/drivers-page.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '', component: MainPageComponent },
      { path: 'schedule', component: SchedulePageComponent },
      { path: 'drivers', component: DriversPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
