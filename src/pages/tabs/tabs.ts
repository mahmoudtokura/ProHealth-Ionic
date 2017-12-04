import { Component } from '@angular/core';

import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "TipsPage";
  tab2Root = HomePage;
  tab3Root = "ContactPage";

  constructor() {

  }
}
