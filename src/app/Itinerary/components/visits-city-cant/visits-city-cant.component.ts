import { Component, OnInit } from '@angular/core';
import { VisitsCityCant } from '../../interfaces/visits-city-cant';
import { ItineraryService } from '../../services/itinerary.service';

@Component({
  selector: 'app-visits-city-cant',
  templateUrl: './visits-city-cant.component.html',
  styleUrl: './visits-city-cant.component.css'
})
export class VisitsCityCantComponent implements OnInit {
  visitsCityCant:VisitsCityCant[] = [];
   displayedColumns: string[] = ['range', 'nameCity', 'cantVisit',  ];

  constructor(
    private itineraryService: ItineraryService ) { }

    ngOnInit(): void {
   this.getVisitsCityCant()
  }

  getVisitsCityCant(): void {
    this.itineraryService.getVisitsCityCant()
      .subscribe(data => this.visitsCityCant = data);
  }
}
