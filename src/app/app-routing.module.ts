import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { UserComponent } from './User/page/user/user.component';
import { TrainComponent } from './Train/page/train/train.component';
import { ItineraryComponent } from './Itinerary/page/itinerary/itinerary.component';

const routes: Routes = [
  {
    path: '',
    title: "Navigation",
    component: NavigationComponent,
    children: [
      {
        path: 'User',
        component: UserComponent
      },
      {
        path: 'Train',
        component: TrainComponent
      },
      {
        path: 'Itinerary',
        component: ItineraryComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
