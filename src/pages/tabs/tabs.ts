import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TipsPage } from '../tips/tips';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TipsPage;
  tab2Root = HomePage;
  tab3Root = "ContactPage";

  constructor() {

  }
}
