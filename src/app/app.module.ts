import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


import { UserComponent } from './User/page/user/user.component';
import { UserCreateComponent } from './User/components/user-create/user-create.component';
import { UserUpdateComponent } from './User/components/user-update/user-update.component';
import { TrainComponent } from './Train/page/train/train.component';
import { TrainCreateComponent } from './Train/components/train-create/train-create.component';
import { TrainUpdateComponent } from './Train/components/train-update/train-update.component';
import { ItineraryComponent } from './Itinerary/page/itinerary/itinerary.component';
import { HoursTrainComponent } from './Itinerary/components/hours-train/hours-train.component';
import { LesshoursItineraryTrainComponent } from './Itinerary/components/lesshours-itinerary-train/lesshours-itinerary-train.component';
import { VisitsCityCantComponent } from './Itinerary/components/visits-city-cant/visits-city-cant.component';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserCreateComponent,
    UserUpdateComponent,
    TrainComponent,
    TrainCreateComponent,
    TrainUpdateComponent,
    ItineraryComponent,
    HoursTrainComponent,
    LesshoursItineraryTrainComponent,
    VisitsCityCantComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterLink,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
