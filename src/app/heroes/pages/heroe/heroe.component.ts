import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  detalles: boolean = true;

  constructor(private activatedRoute : ActivatedRoute, private heroesService : HeroesService , private router : Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getForId(id))
   ) 
   .subscribe(resp => {
    this.detalles=false;
    this.heroe = resp
   });

  }



}
