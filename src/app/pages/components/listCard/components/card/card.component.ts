import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../../../app/Shared/interface/pokemon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() pokemon: Pokemon | undefined;

}
