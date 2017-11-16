import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '@core/services/settings.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public jwtHelper: JwtHelperService;
  valForm: FormGroup;

  constructor(public settings: SettingsService, private http: HttpClient, fb: FormBuilder, private router: Router) {
    this.valForm = fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
      remember_me: [null]
    });
  }
  // tslint:disable-next-line:one-line
  ngOnInit(): void {
    console.log(this.jwtHelper);
    const token = this.jwtHelper.tokenGetter();
    // tslint:disable-next-line:one-line
    if (token != null) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        this.router.navigate(['/']);
      }
    }
  }

  submit() {
    // tslint:disable-next-line:forin
    for (const i in this.valForm.controls) {
      this.valForm.controls[i].markAsDirty();
    }
    if (this.valForm.valid) {
      console.log('Valid!');
      console.log(this.valForm.value);
      const value = {
        username: this.valForm.value.email,
        password: this.valForm.value.password,
        remember_me: [null]
      };
      this.http.post('login', value).subscribe(data => {
        console.log(data['status_code']);
        console.log(data);
        localStorage.setItem('token', data['token']);
        this.router.navigate(['dashboard']);
      });
    }
  }
}
