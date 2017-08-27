import { Component } from '@angular/core';

import { TransactionPage } from '../transaction/transaction';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TransactionPage;
  tab2Root = 'ActivityPage'
  tab3Root = 'CardPage'

  constructor() {

  }
}
