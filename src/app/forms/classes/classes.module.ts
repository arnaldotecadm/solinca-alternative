import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history/history.component';
import { HistoryModule } from './history/history.module';
import { UpcomingClassesComponent } from './upcoming-classes/upcoming-classes.component';
import { UpcomingClassesModule } from './upcoming-classes/upcoming-classes.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UpcomingClassesModule, HistoryModule],
  exports: [UpcomingClassesComponent, HistoryComponent],
})
export class ClassesModule {}
