import { ROUTER_MOCK } from './../../../../../shared/mocks/router.mock';
import { POKEMON_SERVICE_MOCK } from './../../../../../shared/mocks/pokemon-service.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadComponent } from './dashboad.component';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonType } from 'src/app/core/interfaces/pokemon-types.interface';
import { Router } from '@angular/router';

describe('DashboadComponent', () => {
  let component: DashboadComponent;
  let fixture: ComponentFixture<DashboadComponent>;
  let pokemonService: PokemonService;
  let routerService: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      declarations: [ DashboadComponent ],
      providers: [
        {
          provide: PokemonService, useValue: POKEMON_SERVICE_MOCK
        },
        {
          provide: routerService, useValue: ROUTER_MOCK
        }
      ]
    })
    .compileComponents();

    pokemonService = TestBed.inject(PokemonService);
    routerService = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called onGetPokemonTypes method in OnInit', () => {
    const onGetPokemonTypesSpy = spyOn(component, 'onGetPokemonTypes');

    component.ngOnInit();

    expect(onGetPokemonTypesSpy).toHaveBeenCalledTimes(1);
  });

  it('should called getPokemonTypes method from service', () => {
    const getPokemonTypesSpy = spyOn(pokemonService, 'getPokemonTypes').and.callThrough();

    component.onGetPokemonTypes();
    
    expect(component.loaderTypes).toBeTrue();
    expect(getPokemonTypesSpy).toHaveBeenCalledTimes(1);
    expect(component.pokemonTypesList.length).toEqual(18);
  });

  it('should called onSelectType method', () => {
    const navigateSpy = spyOn(routerService, 'navigate');
    const pokemonType: PokemonType = {
      name: 'flying',
      url: 'https://pokeapi.co/api/v2/type/3/'
    };

    component.onSelectType(pokemonType);

    expect(navigateSpy).toHaveBeenCalledWith(['dashboard/pokemon-type/3']);
  });

});
