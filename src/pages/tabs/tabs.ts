import { Component } from '@angular/core';
import { get_data } from '../../utils/localStorage'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = null;
  tab2Root = 'ActivityPage';

  constructor() {
    if (get_data('user').nickname) {
      this.tab1Root = 'HomeTeenPage';
    }
    else
      this.tab1Root = 'HomePage';
  }
}
