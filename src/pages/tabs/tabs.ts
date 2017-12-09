import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { WebsitePage } from '../website/website';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "TipsPage";
  tab2Root = HomePage;
  tab3Root = "ContactPage";
  tab4Root = WebsitePage;


  constructor() {
    
  }

}

