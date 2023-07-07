import { NestedTreeControl } from '@angular/cdk/tree';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { AddCompanyDialogComponent } from 'src/app/company/add-company-dialog/add-company-dialog.component';

interface CompanyListItem{
  id: any;
  companyName: string
}

@Component({
  selector: 'app-owned-companies',
  templateUrl: './owned-companies.component.html',
  styleUrls: ['./owned-companies.component.scss']
})

export class OwnedCompaniesComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private readonly router: Router,
    public dialog: MatDialog
  ) {}

  companies?: Array<CompanyListItem>;



  ngOnInit(): void {
    this.getData()

  }

  protected getData(){
    let headers = new HttpHeaders({});
    let url="http://localhost:3000/company";
    return this.http.get<any>(url, {
      headers: headers
    }).subscribe(res => {
      console.log(res)
      this.companies = res;
    })
  }

  onCompanyClick(company: CompanyListItem){
    this.router.navigate(['company', company.id])
  }

  protected onAddCompany(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddCompanyDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
