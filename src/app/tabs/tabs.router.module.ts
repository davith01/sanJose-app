import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'catalog',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../catalog/catalog.module').then(m => m.CatalogPageModule)
          }
        ]
      },
      {
        path: 'multimedia',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../multimedia/multimedia.module').then(m => m.MultimediaPageModule)
          }
        ]
      },
	  {
        path: 'form',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../form/form.module').then(m => m.FormPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
