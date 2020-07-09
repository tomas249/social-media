import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  public getTime(givenDate) {
    // Local Date
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;

    // UTC in msec
    const utc = localTime + localOffset;

    // UTC+2 in msec
    const utc2 = utc + 3600000 * 2;

    // Publication Date
    const date = new Date(givenDate);
    const dtMillisec = date.getTime(); // in msec

    // Difference
    const difDtMillisec = utc2 - dtMillisec;
    const difDate = new Date(difDtMillisec);

    const hours = difDate.getHours();
    const min = difDate.getMinutes();

    let result;
    if (hours == 1) {
      result = 'an hour ago';
    }
    else if (hours > 0) {
      result = hours + ' hours ago';
    }
    else if (min <= 1){
      result = 'a minute ago';
    }
    else {
      result = min + ' minutes ago';
    }
    return result.toString();
  }
}