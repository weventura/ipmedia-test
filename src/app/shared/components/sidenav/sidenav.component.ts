import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AllStats, PokemonInfo } from 'src/app/core/interfaces/pokemon-info.interface';
import { STATS } from '../../enums/stats.enum';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  
  @Input() opened$: BehaviorSubject<boolean>;
  @Input() loader$: BehaviorSubject<boolean>;
  @Input() data!: PokemonInfo;

  constructor() {
    this.opened$ = new BehaviorSubject<boolean>(false);
    this.loader$ = new BehaviorSubject<boolean>(false);
  }

  onClose(): void {
    this.opened$.next(false);
  }

  onGetDescription(key: AllStats): string {
    return STATS[key];
  }

}
