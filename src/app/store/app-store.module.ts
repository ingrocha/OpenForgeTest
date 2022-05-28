import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { clickMenuReducer } from './clickMenu/clickMenu.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot([]),
    StoreModule.forFeature('clickMenu', clickMenuReducer),
  ],
})
export class AppStoreModule {}
