import { Component, Input, Inject, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/Pokemon';
import { Pokemons } from 'src/app/model/Pokemons';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-one-pokemon',
  templateUrl: './one-pokemon.component.html',
  styleUrls: ['./one-pokemon.component.scss']
})

export class OnePokemonComponent implements OnInit {

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
      this.pokemons$ = this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon');
    }
  }

}
