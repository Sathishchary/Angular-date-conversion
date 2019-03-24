import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  startDate = '03-24-2019';
  arrayDates = [];
  isoDate:any;
  isoDates = [];
  constructor(){ }
  
  storeDays(){
    let dates:any = [];
    for(let i=0; i< 7; i++){
     dates.push(this.storeDates(this.startDate, i));
    }
    this.isoDates = dates;
    console.log(dates)
  }
   storeDates(startDateformatChange, i){
     const date = new Date(startDateformatChange);
    // const isoDate = date.setDate(date.getDate() + i);
     const isoDate =  date.setUTCDate(date.getUTCDate() + i);
    return isoDate.toString();
  }
  ngOnInit(){
     this.storeDays();
  }
}
