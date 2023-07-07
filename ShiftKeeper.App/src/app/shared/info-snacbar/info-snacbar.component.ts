import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-info-snacbar',
  templateUrl: './info-snacbar.component.html',
  styleUrls: ['./info-snacbar.component.scss']
})
export class InfoSnacbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
