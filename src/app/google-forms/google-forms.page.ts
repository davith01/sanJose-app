import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-google-forms',
  templateUrl: './google-forms.page.html',
  styleUrls: ['./google-forms.page.scss'],
})
export class GoogleFormsPage implements OnInit {
  
  googleForm: any;
  
  constructor(
	public route: ActivatedRoute,
	public  sanitizer: DomSanitizer
	) {
	  this.route.queryParams.subscribe(params => {
        if (params && params.url) {
            this.googleForm = {};
			this.googleForm.url = this.sanitizer.bypassSecurityTrustResourceUrl(params.url);
        }
      });
  }

  ngOnInit() {	  
  }
}