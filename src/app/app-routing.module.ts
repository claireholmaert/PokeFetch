import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGenerationsComponent } from './composants/all-generations/generation.component';
import { AllPokemonsComponent } from './composants/all-pokemons/all-pokemons.component';
import { OnePokemonComponent } from './composants/one-pokemon/one-pokemon.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { HomeComponent } from './composants/home/home.component';
import { PokemonComponent } from './composants/pokemon/pokemon.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'generations', component: AllGenerationsComponent },
  { path: 'nav', component: NavBarComponent },
  { path: 'pokemons', component: AllPokemonsComponent },
  { path: 'pokemon', component: OnePokemonComponent },
  { path: 'pokemon/:name', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
