import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { PokePageComponent } from './poke-page/poke-page.component';
import { ComponentsModule } from '../components/components.module';
import { ListCardComponent } from './poke-page/components/listCard/listCard.component';

const components = [PokePageComponent,ListCardComponent];

@NgModule({
  declarations: [],
  imports: [SharedModule],
  exports:[]
})
export class PagesModule {}
