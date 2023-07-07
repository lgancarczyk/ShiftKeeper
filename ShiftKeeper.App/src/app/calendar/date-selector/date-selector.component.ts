import { Component, OnInit } from '@angular/core';

interface weekDay {
  day: string,
  date: Date
}

const temporaryDate = new Date();

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit{

  weekDays: weekDay[] = [
    {day: "Sun", date: temporaryDate },
    {day: "Mon", date: temporaryDate },
    {day: "Tue", date: temporaryDate },
    {day: "Wed", date: temporaryDate },
    {day: "Thu", date: temporaryDate },
    {day: "Fri", date: temporaryDate },
    {day: "Sat", date: temporaryDate }
  ]

  today!:Date;
  // is an index of weekDays
  activeDayIndex!: number;

  ngOnInit(): void {
    this.today = new Date();
    this.activeDayIndex = this.today.getDay();
    this.AsignNewWeekDays()
    console.log("dupsko")
    console.log(this.activeDayIndex)
  }

  protected AsignNewWeekDays(){
    let startingDate: Date = new Date();
    startingDate.setDate(startingDate.getDate() - startingDate.getDay()-1);

    for (let i = 0; i < this.weekDays.length; i++) {
      startingDate.setDate(startingDate.getDate() + 1);
      console.log(this.weekDays[i])
      this.weekDays[i].date = new Date(startingDate);
    }
  }

  onDateSelectorClick(date: Date) {
    this.activeDayIndex = date.getDay();
    console.log(this.activeDayIndex)
  }

}
