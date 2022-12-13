import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UpcomingClassesComponent } from './upcoming-classes/upcoming-classes.component';
import { UpcomingClassesModule } from './upcoming-classes/upcoming-classes.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UpcomingClassesModule],
  exports: [UpcomingClassesComponent],
})
export class ClassesModule {}
