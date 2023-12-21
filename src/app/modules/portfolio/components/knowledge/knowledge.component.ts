import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent {
    arrayKnownledge = [
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de Java',
    },
    {
      src: 'assets/icons/knowledge/aws.svg',
      alt: 'Ícone de conhecimento de AWS',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular',
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Ícone de conhecimento de React',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5',
    },
    {
      src: 'assets/icons/knowledge/js.svg',
      alt: 'Ícone de conhecimento de JavaScript',
    },
];
}
