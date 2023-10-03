import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { POKEMON_BY_ID_MOCK } from '../../mocks/pokemon-by-id.mock';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavComponent, ProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    component.data = <any>POKEMON_BY_ID_MOCK;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called next from BehaviorSubject', () => {
    const nextSpy = spyOn(component.opened$, 'next');

    component.onClose();
    
    expect(nextSpy).toHaveBeenCalledWith(false);
  });
});
