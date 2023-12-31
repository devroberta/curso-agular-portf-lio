import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/portfolio/components/header/header.component';
import { KnowledgeComponent } from './modules/portfolio/components/knowledge/knowledge.component';
import { ExperiencesComponent } from './modules/portfolio/components/experiences/experiences.component';
import { ProjectsComponent } from './modules/portfolio/components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
