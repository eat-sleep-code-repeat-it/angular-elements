import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './heros/hero-list/hero-list.component';
import { HeroDetailComponent } from './heros/hero-detail/hero-detail.component';
import { CrisisListComponent } from './crisis/crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis/crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis/crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis/crisis-center-home/crisis-center-home.component';


import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    HeroListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector : Injector){}
  ngDoBootstrap(){
      const el = createCustomElement(AppComponent, {injector : this.injector});
      customElements.define('custom-root',el);
  }
}
