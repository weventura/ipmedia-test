import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

const resources = [
  LoaderComponent,
  SidenavComponent,
  ProgressBarComponent
];

@NgModule({
  declarations: [
    ...resources
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...resources
  ]
})
export class SharedModule { }
