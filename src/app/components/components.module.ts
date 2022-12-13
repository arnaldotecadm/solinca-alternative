import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuModule } from './menu/menu.module';
import { SideMenuComponent } from './menu/side-menu/side-menu.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MenuModule],
  exports: [SideMenuComponent],
})
export class ComponentsModule {}
