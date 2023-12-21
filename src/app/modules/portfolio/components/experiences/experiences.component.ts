import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  arrayExperiences = [
    {
      summary: {
        strong: 'Developer',
        p: 'Capegmini | Out 2023 - Present',
      },
      text: '<p>Desenvolvimento de software</p>',
    },
    {
      summary: {
        strong: 'Back-end Developer',
        p: 'Zallpy Digital | Mar 2022 - Fev 2023',
      },
      text: '<p>Estágio em desenvolvimento de APIRest usando Java e Spring</p>',
    },
  ];

}
