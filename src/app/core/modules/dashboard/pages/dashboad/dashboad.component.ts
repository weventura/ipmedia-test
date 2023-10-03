import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonType, AllTypes } from 'src/app/core/interfaces/pokemon-types.interface';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';
import { POKEMON_TYPES } from 'src/app/shared/enums/pokemon-types.enum';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.scss']
})
export class DashboadComponent implements OnInit {

  pokemonTypesList!: PokemonType[];

  loaderTypes = false;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.onGetPokemonTypes();
  }

  onGetPokemonTypes(): void {
    this.loaderTypes = true;
    this.pokemonService.getPokemonTypes().subscribe(
      {
        next: (data) => {
          this.loaderTypes = false;
          this.pokemonTypesList = data.results.filter(t => t.name !== 'unknown' && t.name !== 'shadow' );
        },
        error: () => this.loaderTypes = false,
      }
    );
  }

  onSelectType(type: PokemonType): void {
    const urlSplit = type.url.split('/');
    const id = urlSplit[urlSplit.length - 2];
    const urlRedirect = `dashboard/pokemon-type/${id}`;

    this.router.navigate([urlRedirect]);
  }

  onGetBackground(key: AllTypes): string {
    return POKEMON_TYPES[key];
  }

}
