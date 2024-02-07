import { Routes } from '@angular/router';
import { PokePageComponent } from './pages/poke-page/poke-page.component';

export const routes: Routes = [
    {
        path: "",
        component: PokePageComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
];
