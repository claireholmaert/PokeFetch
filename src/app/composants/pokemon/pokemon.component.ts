import { Component, Input, Inject, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/Pokemon';
import { Pokemons } from 'src/app/model/Pokemons';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() public pokemon!: Pokemons;
  public pokemons$!: Observable<Pokemon>;
  public name: string = "";

  constructor(
    @Inject(HttpClient) private http: HttpClient,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    if(this.pokemon != undefined){
      this.pokemons$ = this.http.get<Pokemon>(this.pokemon.url);
    } else {
      this.name = this.route.snapshot.paramMap.get('name')!;
      this.pokemons$ = this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + this.name);
    }
  }
}
