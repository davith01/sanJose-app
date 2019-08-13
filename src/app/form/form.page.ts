import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  formsList: any = [];
  
  constructor(
    public router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit() {
	  this.formsList = [{"title": "Te invitamos a que llenes el siguiente formulario","subtitle": "Segundo Remate NELORE CICLO CORTO","url": "https://docs.google.com/forms/d/e/1FAIpQLScewGPhVRVvH9bAzSuEYgLeuRk5uEwQ_5ALptIZbeWM5MSWCQ/viewform?vc=0&c=0&w=1"}];
      /*this.apiService.getForms()
      .then((response:any) => {
		  if(response.data) {
			this.formsList = response.data;
		  }
		  else {
			this.formsList = [{'title': JSON.stringify(response.error) }];
		  }
      });*/
  }

  goToForm(url:string){
    this.router.navigate(['google-forms'],{
      queryParams: {
        'url': url
      }
    });
  }
}

