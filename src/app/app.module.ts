import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageViewZoomComponent } from './image-view-zoom/image-view-zoom.component';
import { ImageVisorComponent } from './image-visor/image-visor.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewZoomComponent,
    ImageVisorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
