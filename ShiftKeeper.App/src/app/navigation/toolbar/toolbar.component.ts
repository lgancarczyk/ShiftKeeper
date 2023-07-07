import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}

  @Output() navToggle = new EventEmitter<boolean>();

  toogleSideBar(){
    this.navToggle.emit(true);
  }

  protected onHomeClick() {
    this.router.navigate([''])
  }
}
