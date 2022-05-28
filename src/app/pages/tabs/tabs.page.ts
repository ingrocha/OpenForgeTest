import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { inMenu } from 'src/app/store/clickMenu/clickMenu.actions';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private store: Store) {}

  clickMenu() {
    this.store.dispatch(inMenu());
  }
}
