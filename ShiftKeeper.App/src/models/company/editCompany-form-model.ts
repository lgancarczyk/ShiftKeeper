import { FormArray, FormControl, FormGroup } from "@angular/forms"

export type EditCompanyForm = {
    companyName: FormControl<any>,
    companyDescription: FormControl<any>,
    imageUrl: FormControl<any>
}