import { Injectable } from '@angular/core';

interface TypeMonth {
  abbreviation: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {
  month: TypeMonth [] = [
    {
      abbreviation: "Jan",
      name: "January"
    },
    {
      abbreviation: "Feb",
      name: "February"
    },
    {
      abbreviation: "Mar",
      name: "March"
    },
    {
      abbreviation: "Apr",
      name: "April"
    },
    {
      abbreviation: "May",
      name: "May"
    },
    {
      abbreviation: "Jun",
      name: "June"
    },
    {
      abbreviation: "Jul",
      name: "July"
    },
    {
      abbreviation: "Aug",
      name: "August"
    },
    {
      abbreviation: "Sep",
      name: "September"
    },
    {
      abbreviation: "Oct",
      name: "October"
    },
    {
      abbreviation: "Nov",
      name: "November"
    },
    {
      abbreviation: "Dec",
      name: "December"
    }
  ]
  constructor() { }

  getMonthTxt(month: number) {
    return this.month[month].abbreviation;
  }
}
