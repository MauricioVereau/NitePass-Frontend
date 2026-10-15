import { Routes } from '@angular/router';

export const WEBSITE_ROUTES: Routes = [
  {
    path:'',
    loadComponent: () => import('./website-layout/website-layout').then(m => m.WebsiteLayout),
    children:[
      {
        path:'',
        pathMatch:'full',
        title: 'Inicio',
        loadComponent: () => import('./home-page/home-page').then(m => m.HomePage)
      },
      {
        path:'events',
        title: 'Eventos',
        loadComponent: () => import('./events-page/events-page').then(m => m.EventsPage)
      },
      {
        path:'organizers',
        title: 'Organizadores',
        loadComponent: () => import('./organizers-page/organizers-page').then(m => m.OrganizersPage)
      },
      {
        path:'nightclubs',
        title: 'Discotecas',
        loadComponent: () => import('./nightclubs-page/nightclubs-page').then(m => m.NightclubsPage)  ,
      },
      {
        path: 'about',
        title: 'Nosotros',
        loadComponent: () => import('./about-page/about-page').then(m => m.AboutPage)
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
]
