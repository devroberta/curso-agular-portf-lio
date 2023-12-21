import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/portfolio/components/header/header.component';
import { KnowledgeComponent } from './modules/portfolio/components/knowledge/knowledge.component';
import { ExperiencesComponent } from './modules/portfolio/components/experiences/experiences.component';
import { ProjectsComponent } from './modules/portfolio/components/projects/projects.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
