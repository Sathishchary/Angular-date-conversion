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
    this.arrayDates = dates;
    console.log(dates)
    const conv = [];
    for(let i=0; i< this.arrayDates.length; i++){
       const isoDate = new Date(this.arrayDates[i]).toDateString();
       conv.push(isoDate);
    }
    this.arrayDates = conv;
    this.isoDates = conv;
    console.log(conv);
  }
   storeDates(startDateformatChange, i){
     const date = new Date(startDateformatChange);
    // const isoDate = date.setDate(date.getDate() + i);
     const isoDate =  date.setUTCDate(date.getUTCDate() + i);
    return isoDate;
  }
  ngOnInit(){
     this.storeDays();
  }
}
