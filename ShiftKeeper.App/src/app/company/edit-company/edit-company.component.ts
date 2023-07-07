import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CompanyResponse } from 'src/models/company/companyResponse-model';
import { EditCompanyForm } from 'src/models/company/editCompany-form-model';

let id : any;

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent {

	constructor(
		private http: HttpClient,
		private route: ActivatedRoute,
		private router: Router
	) {}

	imagePath: string = "/assets/images/user.png"

	form!: FormGroup<EditCompanyForm>;
	company!: CompanyResponse;

	async ngOnInit(): Promise<void> {
		id = this.route.snapshot.paramMap.get('id');
		this.form = new FormGroup({
			companyName: new FormControl("", [Validators.required]),
			companyDescription: new FormControl(""),
			imageUrl: new FormControl("")
		})
		this.getData()
	}

	getData(){
		let headers = new HttpHeaders({});
		let url=`http://localhost:3000/company/${id}`;
		this.http.get<CompanyResponse>(url, {
		headers: headers
		}).subscribe(res => {
		this.company = res;

		this.form.patchValue(res)
		},
		error => {
			this.router.navigate(['error'])
		})
	}

	selectFile(event: any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			//this.msg = 'You must select an image';
			return;
		}
		
			var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			//this.msg = "Only images are supported";
			return;
		}
	
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			// this.msg = "";
			// this.url = reader.result; 
		}
	}

	onDeleteImage(): void{

	}

	onSave(): void{
		
	}

	onDeny(id:string){

	}

	onAdd(id: string){

	}

	onRemove(id:string){
		
	}
}