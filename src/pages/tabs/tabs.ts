import { Component } from '@angular/core';
<<<<<<< HEAD

import { TransactionPage } from '../transaction/transaction';
=======
import { get_data } from '../../utils/localStorage'
>>>>>>> cd46d55745cf841aa3d861c7d45d3ad226be101b

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
<<<<<<< HEAD

  tab1Root = TransactionPage;
=======
  tab1Root = null;
>>>>>>> cd46d55745cf841aa3d861c7d45d3ad226be101b
  tab2Root = 'ActivityPage'
  tab3Root = 'CardPage'

  constructor() {
    if (get_data('user').nickname)
      this.tab1Root = 'HomeTeenPage';
    else
      this.tab1Root = 'HomePage';
  }
}
