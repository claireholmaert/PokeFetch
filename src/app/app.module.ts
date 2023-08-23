import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { LOCALE_ID } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { AllGenerationsComponent } from './composants/all-generations/generation.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { TitleComponent } from './composants/title/title.component';
import { AllPokemonsComponent } from './composants/all-pokemons/all-pokemons.component';
import { OnePokemonComponent } from './composants/one-pokemon/one-pokemon.component';
import { OneGenerationComponent } from './composants/one-generation/one-generation.component';
import { PokemonComponent } from './composants/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllGenerationsComponent,
    NavBarComponent,
    TitleComponent,
    AllPokemonsComponent,
    OnePokemonComponent,
    OneGenerationComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'} // pour le format des dates 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
