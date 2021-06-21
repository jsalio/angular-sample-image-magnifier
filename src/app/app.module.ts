import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { ImageViewTowComponent } from './image-view-tow/image-view-tow.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewComponent,
    ImageViewTowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
