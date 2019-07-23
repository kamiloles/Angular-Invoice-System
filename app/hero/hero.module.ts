import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [IndexComponent, HeroComponent],
  imports: [
    CommonModule
  ],
  exports: [
    IndexComponent
  ]
})
export class HeroModule { }
