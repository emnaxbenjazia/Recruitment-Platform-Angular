import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './components/cv/cv.component';
import { ListComponent } from './components/cv/list/list.component';
import { ItemComponent } from './components/cv/item/item.component';
import { DetailComponent } from './components/cv/detail/detail.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { HiredListComponent } from './components/hired-list/hired-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    DefaultImagePipe,
    HiredListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
