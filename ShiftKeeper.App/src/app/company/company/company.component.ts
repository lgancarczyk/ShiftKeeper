import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyResponse } from 'src/models/company/companyResponse-model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  id!: any;
  company!: CompanyResponse;
  imagePath: string = "/assets/images/user.png"
  userBelongsToCompany: boolean = false;
  userIsOwner: boolean = true;

  constructor(
    private http: HttpClient,
		private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData()
  }
  
  getData(){
    let headers = new HttpHeaders({});
    let url=`http://localhost:3000/company/${this.id}`;
    this.http.get<CompanyResponse>(url, {
      headers: headers
    })
    .subscribe(res => {
      console.log(res);
      this.company = res;
      this.userIsOwner = res.owner.id == "a@a.pl";
      this.userBelongsToCompany = this.userIsOwner;
    },
    error => this.router.navigate(['/error']))
  }
  onManage(){
    this.router.navigate(['company', 'edit', this.id])
  }

  onGotoCalendar(){
    this.router.navigate(['company', 'calendar', this.id])
  }
}
