import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PokemonInfo } from 'src/app/core/interfaces/pokemon-info.interface';
import { AllTypes } from 'src/app/core/interfaces/pokemon-types.interface';
import { PokemonSlot, SpecificTypeResponse } from 'src/app/core/interfaces/specific-type.interface';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';
import { POKEMON_TYPES } from 'src/app/shared/enums/pokemon-types.enum';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})
export class PokemonTypeComponent implements OnInit {

  data!: SpecificTypeResponse;
  pokemonInfo!: PokemonInfo;

  currentIndex = 0;

  openedSidenav$!: BehaviorSubject<boolean>;

  loaderPokemonType = false;
  loaderPokemonInfo$!: BehaviorSubject<boolean>;
  
  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.openedSidenav$ = new BehaviorSubject<boolean>(false);
    this.loaderPokemonInfo$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit(): void {
    this.onGetIdByUrl();
  }

  onGetPokemonsByType(id: string): void {
    this.loaderPokemonType = true;
    this.pokemonService.getPokemonByType(id).subscribe(
      {
        next: (data) => {
          this.data = data;
          this.loaderPokemonType = false;
        },
        error: (err) => this.loaderPokemonType = false
      }
    );
  }

  onGetIdByUrl(): void {
    this.activatedRoute.params.subscribe(params => {
        const { id } = params;

        this.onGetPokemonsByType(id);
      }
    );
  }

  onGetIcon(key: AllTypes): string {
    return POKEMON_TYPES[key];
  }

  onOpenSidenav(data: PokemonSlot): void {
    this.loaderPokemonInfo$.next(true);
    this.pokemonService.getPokemonById(data.pokemon.url).subscribe(
      {
        next: (data) => {
          this.pokemonInfo = data;
          this.loaderPokemonInfo$.next(false);
          this.openedSidenav$.next(true);
        },
        error: (err) => this.loaderPokemonInfo$.next(false)
      }
    );
  }

  onBack(): void {
    this.router.navigate(['dashboard']);
  }
}
