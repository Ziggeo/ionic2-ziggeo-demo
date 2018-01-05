import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ZiggeoModule } from "angular-ziggeo/build/ziggeo";
import { ZiggeoPlayerComponent } from "angular-ziggeo/build/ziggeo";
import { ZiggeoRecorderComponent } from "angular-ziggeo/build/ziggeo";

import { RecorderPage } from '../pages/recorder/recorder';
import { PlayerPage } from '../pages/player/player';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RecorderPage,
    PlayerPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
      ZiggeoModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecorderPage,
    PlayerPage,
    HomePage,
      ZiggeoRecorderComponent,
      ZiggeoPlayerComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
