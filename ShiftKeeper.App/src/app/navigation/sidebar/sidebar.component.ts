import { Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogoutDialogComponent } from 'src/app/user/logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{

  isLoggedIn!: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public dialog: MatDialog,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      if (val.url) {
        this.closeSideNav();
        if (this.authService.IsloggedIn()) {
          this.isLoggedIn = true;
        }
        else{
          this.isLoggedIn = false;
        }
      }
    })
  }

  @Output() sidenav: EventEmitter<any> = new EventEmitter();
  @Output() closeSidenav: EventEmitter<any> = new EventEmitter();

  toggleSideNav() {
   this.sidenav.emit();
  }

  closeSideNav(){
    this.closeSidenav.emit();
  }

  imagePath: string = "/assets/images/user.png"

  userIconClick() {
    console.log('userClicked an image')
  }

  protected onLogin() {
    this.router.navigate(['/user', 'login'])
  }

  protected onRegister() {
    this.router.navigate(['/user', 'register'])
  }

  protected onLogout(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LogoutDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  
}

