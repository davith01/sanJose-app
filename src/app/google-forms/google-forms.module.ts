import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GoogleFormsPage } from './google-forms.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleFormsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GoogleFormsPage]
})
export class GoogleFormsPageModule {}
