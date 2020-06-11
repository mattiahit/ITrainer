import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TechnologiesListComponent } from './technologies-list/technologies-list.component';
import { TechnologyComponent } from './technology/technology.component';
import { TechnologyQuestionComponent } from './technology-question/technology-question.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TechnologiesListComponent,
    TechnologyComponent,
    TechnologyQuestionComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
