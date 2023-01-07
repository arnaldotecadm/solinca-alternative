import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth/auth.guard';
import { HistoryComponent } from './forms/classes/history/history.component';
import { UpcomingClassesComponent } from './forms/classes/upcoming-classes/upcoming-classes.component';
import { GymListComponent } from './forms/gym/gym-list/gym-list.component';
import { HomeComponent } from './forms/home/home.component';
import { ModalityComponent } from './forms/modality/modality.component';
import { SigninComponent } from './forms/signin/signin.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'gym',
    component: GymListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upcoming-classes',
    component: UpcomingClassesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'modality',
    component: ModalityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-in',
    component: SigninComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
