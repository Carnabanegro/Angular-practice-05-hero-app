import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado : Heroe | undefined;

  constructor(private heroesService:HeroesService) { }

  

  ngOnInit(): void {
  }

  buscando(){
      this.heroesService.getSugerenciasHeroes(this.termino.trim()).subscribe((heroes:Heroe[]) =>{
        this.heroes = heroes;
      })
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value ){
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe : Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getForId(heroe.id!)
    .subscribe((resp:Heroe) =>{
        this.heroeSeleccionado = resp
    })
  }
}
