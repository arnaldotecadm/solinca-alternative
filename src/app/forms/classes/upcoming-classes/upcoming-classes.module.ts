import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { UpcomingClassesComponent } from './upcoming-classes.component';

@NgModule({
  declarations: [UpcomingClassesComponent],
  imports: [CommonModule, MatCardModule, MatExpansionModule, MatButtonModule],
  exports: [UpcomingClassesComponent],
})
export class UpcomingClassesModule {}
