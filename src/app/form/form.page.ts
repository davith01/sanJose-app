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
  error: any;
  
  constructor(
    public router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit() {
	  
      this.apiService.getForms()
      .then((response:any) => {
		  if(response.data) {
			this.formsList = response.data;
		  }
		  else if(response.error) {
			this.error = response.error;
		  }
      })
  }

  goToForm(url:string){
    this.router.navigate(['google-forms'],{
      queryParams: {
        'url': url
      }
    });
  }
}

