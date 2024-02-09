import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../../core/interface/pokemon';
import { CardComponent } from "../../../../components/card/card.component";
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'list-card',
  standalone: true,
  imports: [CommonModule,NgFor, NgIf, CardComponent],
  templateUrl: './listCard.component.html',
  styleUrl: './listCard.component.scss',
})
export class ListCardComponent {
  @Input() pokemons: Pokemon[] = [];
}
