import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent {

  constructor(
    private readonly router: Router
    ){}

  protected onLogout(){
    sessionStorage.clear()
    this.router.navigate(['/user', 'login'])
  }
}
