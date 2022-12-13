import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { GymListComponent } from './gym-list.component';

@NgModule({
  declarations: [GymListComponent],
  imports: [CommonModule, MatCardModule, MatExpansionModule, MatButtonModule],
  exports: [GymListComponent],
})
export class GymListModule {}
