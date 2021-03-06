import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  
  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
  ) { 
	
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
	
  ngOnInit() {
  this.loginForm = this.formBuilder.group({
		'username': ['', Validators.required],
		'password': ['', Validators.required],
		'email': ['', [Validators.required, Validators.email]]
	});

	// get return url from route parameters or default to '/'
	this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  onSubmit() {
	this.submitted = true;

	// stop here if form is invalid
	if (this.loginForm.invalid) {
		return;
	}

	this.loading = true;
	/*this.authenticationService.login(this.f.username.value, this.f.password.value)
		.pipe(first())
		.subscribe(
			data => {
				this.router.navigate([this.returnUrl]);
			},
			error => {
				this.alertService.error(error);
				this.loading = false;
			});
	*/
  }

}
