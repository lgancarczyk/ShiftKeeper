import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoSnacbarComponent } from 'src/app/shared/info-snacbar/info-snacbar.component';


type snackBarIconColor = 
  "#09b51d" |
  "#ba0416"

@Injectable({
  providedIn: 'root'
})
export class SnackbarServiceService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  public openInfoSnackBar(iconColor:snackBarIconColor, message:any, icon:any){
    this.snackBar.openFromComponent(InfoSnacbarComponent, {
      duration: 2000,
      data: {
        iconColor: iconColor,
        message: message,
        icon: icon
      }
    })
  }
}
