import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../services/itinerary.service';
import { LesshoursItineraryTrain } from '../../interfaces/lesshours-itinerary-train';


@Component({
  selector: 'app-lesshours-itinerary-train',
  templateUrl: './lesshours-itinerary-train.component.html',
  styleUrl: './lesshours-itinerary-train.component.css'
})
export class LesshoursItineraryTrainComponent implements OnInit {
  lesshoursItineraryTrain:LesshoursItineraryTrain[] = [];
   displayedColumns: string[] = ['idTrain', 'nameTrain', 'hours',  ];

  constructor(
    private itineraryService: ItineraryService ) { }

    ngOnInit(): void {
   this.getLesshoursItineraryTrain()
  }

  getLesshoursItineraryTrain(): void {
    this.itineraryService.getLesshoursItineraryTrain()
      .subscribe(data => this.lesshoursItineraryTrain = data);
  }
}
