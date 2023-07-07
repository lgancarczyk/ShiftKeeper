import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-screen',
  templateUrl: './calendar-screen.component.html',
  styleUrls: ['./calendar-screen.component.scss']
})
export class CalendarScreenComponent {

  showAddEvent:boolean = false;

  @Output() showAddEventEvent = new EventEmitter<boolean>();

  onAddEvent() {
    this.showAddEventEvent.emit(true);
  }
}
