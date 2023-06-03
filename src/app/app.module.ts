import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MentionModule } from 'angular-mentions';

import { AppComponent } from './app.component';
import { EmoticMentionComponent } from './emoticMentionComponent/emoticMentionComponent';

@NgModule({
  declarations: [
    AppComponent,
    EmoticMentionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MentionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
