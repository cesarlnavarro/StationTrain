import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { HoursTrain } from '../interfaces/hours-train';
import { VisitsCityCant } from '../interfaces/visits-city-cant';
import { LesshoursItineraryTrain } from '../interfaces/lesshours-itinerary-train';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  private http = inject(HttpClient);

  constructor() { }

  getHoursTrain() :Observable<HoursTrain[]>{
    return this.http.get<HoursTrain[]>('http://localhost:5258/api/ItineraryTrain/hoursTrain');
   }


   getVisitsCityCant() :Observable<VisitsCityCant[]>{
    return this.http.get<VisitsCityCant[]>('http://localhost:5258/api/ItineraryTrain/VisitsCityCant');
   }

   getLesshoursItineraryTrain() :Observable<LesshoursItineraryTrain[]>{
    return this.http.get<LesshoursItineraryTrain[]>('http://localhost:5258/api/ItineraryTrain/LesshoursItineraryTrain');
   }


}
