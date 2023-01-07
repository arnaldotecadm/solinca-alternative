import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClassesModule } from './classes/classes.module';
import { UpcomingClassesComponent } from './classes/upcoming-classes/upcoming-classes.component';
import { GymListComponent } from './gym/gym-list/gym-list.component';
import { GymModule } from './gym/gym.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ModalityComponent } from './modality/modality.component';
import { ModalityModule } from './modality/modality.module';
import { SigninComponent } from './signin/signin.component';
import { SigninModule } from './signin/signin.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    GymModule,
    ClassesModule,
    ModalityModule,
    SigninModule,
  ],
  exports: [
    HomeComponent,
    GymListComponent,
    UpcomingClassesComponent,
    ModalityComponent,
    SigninComponent,
  ],
})
export class FormsModule {}
