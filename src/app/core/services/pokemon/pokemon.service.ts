import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonTypesResponse } from '../../interfaces/pokemon-types.interface';
import { SpecificTypeResponse } from '../../interfaces/specific-type.interface';
import { PokemonInfo } from '../../interfaces/pokemon-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly BASE_URL = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) {}
  
  getPokemonTypes(): Observable<PokemonTypesResponse> {
    return this.httpClient.get<PokemonTypesResponse>(
      `${this.BASE_URL}type/`
    );
  }

  getPokemonByType(id: string): Observable<SpecificTypeResponse> {
    return this.httpClient.get<SpecificTypeResponse>(
      `${this.BASE_URL}type/${id}`
    );
  }

  getPokemonById(url: string): Observable<PokemonInfo> {
    return this.httpClient.get<PokemonInfo>(url);
  }
}
