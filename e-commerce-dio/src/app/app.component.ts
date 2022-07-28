import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router: Router, titleService: Title) {
    router.events

      // ****************************************
      // Filtramos apenas os eventos do tipo
      // NavigationEnd que ocorre quando a
      // navegação da rota é efetuada com sucesso.
      // Para saber mais sobre sobre este eventos:
      // https://angular.io/guide/router-reference#router-events
      // ****************************************
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd | any) => {
        console.log('URL ativa: ', event.url);

        switch (event.url) {
          case '/home':
            titleService.setTitle('Home');
            break;

          case '/sobre':
            titleService.setTitle('Sobre');
            break;

          case '/produtos':
            titleService.setTitle('Produtos');
            break;
          case '/suporte':
            titleService.setTitle('Suporte');
            break;

          default:
            titleService.setTitle('E-Commerce');
            break;
        }
      });
  }
}
