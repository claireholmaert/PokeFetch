import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPokemons } from 'src/app/model/ApiPokemon';


@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss']
})
export class AllPokemonsComponent {

  public apiPokemons$!: Observable<ApiPokemons>;

  constructor(
    @Inject(HttpClient) private http: HttpClient,
  ) {
      this.apiPokemons$ = this.http.get<ApiPokemons>('https://pokeapi.co/api/v2/pokemon');
  }

}
