import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarServiceService } from 'src/app/services/snackbar/snackbar-service.service';

@Component({
  selector: 'app-add-company-dialog',
  templateUrl: './add-company-dialog.component.html',
  styleUrls: ['./add-company-dialog.component.scss']
})
export class AddCompanyDialogComponent {

  constructor(
    private readonly router: Router,
    private http: HttpClient,
    private snackbarService: SnackbarServiceService
    ) {}

  protected onCreate(){
    let model = {
      companyName: "myCompany",
      owner:{
        id: "a@a.pl",
        name: "lukasz",
        surname: "gancarczyk"

      }
    }
    let url = "http://localhost:3000/company"
    this.http.post(url, model).subscribe(res => {
      console.log(res)
      this.snackbarService.openInfoSnackBar("#09b51d", "Company Created Succesfully", "info")
      this.router.navigate(['/company', `edit`, (<any>res).id])
    })
  }

}
