import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingClassesComponent } from './forms/classes/upcoming-classes/upcoming-classes.component';
import { GymListComponent } from './forms/gym/gym-list/gym-list.component';
import { HomeComponent } from './forms/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'gym',
    component: GymListComponent,
  },
  {
    path: 'upcoming-classes',
    component: UpcomingClassesComponent,
  },
  {
    path: '**',
    redirectTo: 'upcoming-classes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
