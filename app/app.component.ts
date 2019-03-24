import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  startDate = '2019-03-24';
  arrayDates = [];
  isoDate:any;
  isoDates = [];
  currentDate =  new Date();
  constructor(){

   }
  
  storeDays(){
    let dates:any = [];
    for(let i=0; i< 7; i++){
     let date = new Date(this.storeDates(this.startDate, i));
     let datesv:any = date.toISOString();
     datesv = datesv.split('T');
     datesv = datesv[0];
     dates.push(datesv);
    }
    this.isoDates = dates;
    console.log(dates)
     for(let i=0; i< this.isoDates.length; i++){
       const value = new Date(this.isoDates[i])
       console.log(value.toISOString());
    }
  }
   storeDates(startDateformatChange, i){
     const date = new Date(startDateformatChange);
    //  const isoDate = date.setDate(date.getDate() + i);
     let isoDate =  date.setUTCDate(date.getUTCDate() + i);
    // const d = new Date(startDateformatChange); 
    //  const datev =  d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
    return isoDate;
  }
  ngOnInit(){
     this.storeDays();
  }
}
