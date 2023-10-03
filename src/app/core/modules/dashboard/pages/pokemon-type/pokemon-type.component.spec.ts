import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeComponent } from './pokemon-type.component';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { SharedModule } from 'src/app/shared/shared.module';
import { POKEMON_SERVICE_MOCK } from 'src/app/shared/mocks/pokemon-service.mock';
import { ROUTER_MOCK } from 'src/app/shared/mocks/router.mock';
import { of } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonSlot } from 'src/app/core/interfaces/specific-type.interface';
import { POKEMON_BY_ID_MOCK } from 'src/app/shared/mocks/pokemon-by-id.mock';

describe('PokemonTypeComponent', () => {
  let component: PokemonTypeComponent;
  let fixture: ComponentFixture<PokemonTypeComponent>;
  let pokemonService: PokemonService;
  let routerService: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule, NgxPaginationModule],
      declarations: [ PokemonTypeComponent ],
      providers: [
        {
          provide: PokemonService, useValue: POKEMON_SERVICE_MOCK
        },
        {
          provide: routerService, useValue: ROUTER_MOCK
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
          },
        },
      ]
    })
    .compileComponents();

    pokemonService = TestBed.inject(PokemonService);
    routerService = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypeComponent);
    component = fixture.componentInstance;
    component.pokemonInfo = <any>POKEMON_BY_ID_MOCK;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called onGetIdByUrl method in OnInit', () => {
    const onGetIdByUrlSpy = spyOn(component, 'onGetIdByUrl');

    component.ngOnInit();

    expect(onGetIdByUrlSpy).toHaveBeenCalledTimes(1);
  });

  it('should called onGetPokemonsByType method', () => {
    const onGetPokemonsByTypeSpy = spyOn(component, 'onGetPokemonsByType');

    component.onGetIdByUrl();

    expect(onGetPokemonsByTypeSpy).toHaveBeenCalledTimes(1);
  });

  it('should called getPokemonByType method from service', () => {
    const getPokemonByTypeSpy = spyOn(pokemonService, 'getPokemonByType').and.callThrough();

    component.onGetPokemonsByType('1');

    expect(getPokemonByTypeSpy).toHaveBeenCalledTimes(1);
    expect(getPokemonByTypeSpy).toHaveBeenCalledWith('1');
    expect(component.data).toBeDefined();
  });
  
  it('should called getPokemonById method from service', () => {
    const getPokemonByIdSpy = spyOn(pokemonService, 'getPokemonById').and.callThrough();
    const pokemonSlot: PokemonSlot = {
      slot: 2,
      pokemon: {
        name: 'charizard',
        url: 'https://pokeapi.co/api/v2/pokemon/6/'
      }
    }

    component.onOpenSidenav(pokemonSlot);

    expect(getPokemonByIdSpy).toHaveBeenCalledTimes(1);
    expect(getPokemonByIdSpy).toHaveBeenCalledWith(pokemonSlot.pokemon.url);
    expect(component.pokemonInfo).toBeDefined();
  });

  it('should called onBack method ', () => {
    const navigateSpy = spyOn(routerService, 'navigate');

    component.onBack();

    expect(navigateSpy).toHaveBeenCalledWith(['dashboard']);
  });
});
