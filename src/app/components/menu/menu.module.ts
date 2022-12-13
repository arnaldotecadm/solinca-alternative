import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuModule } from './side-menu/side-menu.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SideMenuModule],
  exports: [SideMenuComponent],
})
export class MenuModule {}
