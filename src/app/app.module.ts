import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { WpProvider } from "../providers/wp/wp";
import { Camera } from "@ionic-native/camera";
import { EmailComposer } from "@ionic-native/email-composer";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { CacheModule } from "ionic-cache";

import { HomePage } from "../pages/home/home";
import { AboutPage } from "../pages/about/about";

@NgModule({
  declarations: [MyApp, HomePage, TabsPage, AboutPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    CacheModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, TabsPage, AboutPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    EmailComposer,
    InAppBrowser,
    WpProvider
  ]
})
export class AppModule {}
