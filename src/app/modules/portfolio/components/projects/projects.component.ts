import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  arrayProjects = [
    {
      src: 'assets/img/projects/loja.png',
      alt: '',
      title: 'Modelo de Loja E-commerce',
      width: '100px',
      height: '100px',
      description: '<p>Modelo de site para venda de produtos</p>',
      links: [
        {
          name: 'Conheça o site',
          href: 'https://devroberta.github.io/proway-computers-website-angular/',
        }
      ]
    },
  ];
}
