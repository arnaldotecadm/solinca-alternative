import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalityComponent } from './modality.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ModalityComponent],
  imports: [CommonModule, MatCardModule],
  exports: [ModalityComponent],
})
export class ModalityModule {}
