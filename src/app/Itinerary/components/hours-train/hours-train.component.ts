import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../services/itinerary.service';
import { HoursTrain } from '../../interfaces/hours-train';

@Component({
  selector: 'app-hours-train',
  templateUrl: './hours-train.component.html',
  styleUrl: './hours-train.component.css'
})
export class HoursTrainComponent implements OnInit {
  hoursTrain:HoursTrain[] = [];
   displayedColumns: string[] = ['idTrain', 'nameTrain', 'hours',  ];

  constructor(
    private itineraryService: ItineraryService ) { }

    ngOnInit(): void {
   this.getHoursTrain()
  }

  getHoursTrain(): void {
    this.itineraryService.getHoursTrain()
      .subscribe(data => this.hoursTrain = data);
  }

}
