import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginForm } from 'src/models/user/login-form-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  userData:any;

  invalidLogin: boolean = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private http: HttpClient,
    private authService: AuthService
    ) {}

  form!: FormGroup<LoginForm>;
  ngOnInit(): void {
    sessionStorage.clear();
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
    
  }

  onSubmit(): void{
    if (this.form.valid) {
      this.login()
    }
  }

  onGoToRegister(): void{
    this.router.navigate(['/user', 'register'])
  }

  login() {
    const credentials = {
      'email': this.form.value.email,
      'password': this.form.value.password
    }
    this.authService.GetByEmail(this.form.value.email)
        .subscribe(res => {
          this.userData = res
          if (this.userData.password === this.form.value.password) {
            sessionStorage.setItem('jwt', this.userData.jwt)
            this.router.navigate(['/home'])
          }
          else{
            this.invalidLogin = true;
          }
        }
      )

    // this.http.post('https://localhost:7168/api/auth/login', credentials)
    //   .subscribe(response => {
    //     const token = (<any>response).token;
    //     localStorage.setItem('jwt', token);
    //     this.router.navigate(['/']);
    //   }), () =>{
    //     this.invalidLogin = true;
    //   }
  }

}

