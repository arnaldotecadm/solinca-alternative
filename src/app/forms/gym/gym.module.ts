import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GymListComponent } from './gym-list/gym-list.component';
import { GymListModule } from './gym-list/gym-list.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, GymListModule],
  exports: [GymListComponent],
})
export class GymModule {}
