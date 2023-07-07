import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RegisterForm } from 'src/models/user/register-form-model';
import { RegisterDto } from 'src/app/DTOs/auth/register.dto.interface';
import { SnackbarServiceService } from 'src/app/services/snackbar/snackbar-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private authService: AuthService,
    private snackbarService: SnackbarServiceService

    ) {}

  form!: FormGroup<RegisterForm>;
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
    })
    
  }

  onSubmit(): void{
    if (this.form.valid) {
      console.log(this.form.value)
      
      this.authService.Register(Object(this.form.value))
        .subscribe(res => {
          this.snackbarService.openInfoSnackBar("#09b51d", "Account Created", "info")
          this.router.navigate(['/user', 'login'])
        }
      )
    }
  }

  onGoToLogin(): void{
    this.router.navigate(['/user', 'login'])
  }
}
