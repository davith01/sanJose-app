import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'catalog', loadChildren: './catalog/catalog.module#CatalogPageModule' },
  { path: 'multimedia', loadChildren: './multimedia/multimedia.module#MultimediaPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'google-forms', loadChildren: './google-forms/google-forms.module#GoogleFormsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
