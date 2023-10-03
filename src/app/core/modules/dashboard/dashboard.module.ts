import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboadComponent } from './pages/dashboad/dashboad.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonTypeComponent } from './pages/pokemon-type/pokemon-type.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DashboadComponent,
    PokemonTypeComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
