import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboadComponent } from './pages/dashboad/dashboad.component';
import { PokemonTypeComponent } from './pages/pokemon-type/pokemon-type.component';

const routes: Routes = [
    {
        path: '',
        component: DashboadComponent,
    },
    {
        path: 'pokemon-type/:id',
        component: PokemonTypeComponent
    }
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class DashboardRoutingModule {}