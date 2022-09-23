import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes : Heroe[] = []

  constructor(private heroesService : HeroesService) { }

  ngOnInit() {

      this.heroesService.getHeroes().subscribe((resp:Heroe[]) => {
        
        this.heroes = resp;

      })
  }

}
