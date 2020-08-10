import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsCalendarComponent implements OnInit {

  public readonly months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];


  public dates: Array<Array<Date>> = [[]];
  public dates2: Array<any> = [];
  public curentMonth: Date;

  constructor() { }

  ngOnInit() {
    const now = new Date();
    this.buildCalendar(now);
  }

  private buildCalendar(date: Date): void {
    const startCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const startNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);

    this.curentMonth = new Date(startCurrentMonth);

    if (startCurrentMonth.getDay() > 0) {
      startCurrentMonth.setDate(-startCurrentMonth.getDay() + 1);
    }

    this.dates2 = [];

    let i = 0;
    while (startNextMonth.getMonth() !== startCurrentMonth.getMonth()) {
      startCurrentMonth.setDate(startCurrentMonth.getDate() + 1);
      this.dates2.push(new Date(startCurrentMonth));
      i = i + 1;
    }
    while (startCurrentMonth.getDay() !== (0)) {
      startCurrentMonth.setDate(startCurrentMonth.getDate() + 1);
      this.dates2.push(new Date(startCurrentMonth));
      i = i + 1;
    }

    let week = 0;
    let day = 0;

    this.dates = [[]];

    for (let index = 0; index < this.dates2.length; index++) {
      const element = this.dates2[index];
      if (index % 7 === 0) {
        week = week + 1;
        day = 0;
        this.dates.push([]);
      }
      this.dates[week].push(this.dates2[index]);
    }
  }

  public nextMonth() {
    this.curentMonth.setMonth(this.curentMonth.getMonth() + 1);
    this.buildCalendar(this.curentMonth);
  }

  public prevMonth() {
    this.curentMonth.setMonth(this.curentMonth.getMonth() - 1);
    this.buildCalendar(this.curentMonth);
  }

}
