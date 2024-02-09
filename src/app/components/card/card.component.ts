import { Component, Input } from '@angular/core';
import { Pokemon } from '../../core/interface/pokemon';


@Component({
  standalone:true,
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() pokemon: Pokemon | undefined;

}
