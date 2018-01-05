import { Component } from '@angular/core';

import { RecorderPage } from '../recorder/recorder';
import { PlayerPage } from '../player/player';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RecorderPage;
  tab3Root = PlayerPage;

  constructor() {

  }
}
