import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  goToForm(url:string){
    this.router.navigate(['google-forms']);
  }

}
