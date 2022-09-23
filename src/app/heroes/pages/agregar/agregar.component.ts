import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  opciones = [
    {
      id: "DC Comics",
      descrip: "DC-COMICS"
    },
    {
      id: "Marvel Comics",
      descrip: "MARVEL COMICS"
    }
  ]

  heroe : Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: 'assets/no-image'
  }

  constructor(private activatedRoute : ActivatedRoute, private heroesService: HeroesService, private router:Router) { }

  ngOnInit(): void {

    if(this.router.url.includes('editar')){
      this.activatedRoute.params
      .pipe(
        switchMap(({id}) =>this.heroesService.getForId(id))
      )
      .subscribe(heroe => this.heroe = heroe)
    }

  }

  guardar(){

    
    if ((this.heroe.superhero.trim().length === 0) &&
        (this.heroe.alter_ego.trim().length === 0) &&
        (this.heroe.characters.trim().length === 0) &&
        (this.heroe.first_appearance.trim().length === 0))
    {
      return;
    }


    if (this.heroe.id){
      
      this.heroesService.updateHeroe(this.heroe).subscribe(resp =>{
        this.router.navigate(['/heroes',resp.id])
      });

    }else{

      this.heroesService.addHeroe(this.heroe).subscribe(resp =>{
        this.router.navigate(['/heroes',resp.id])
      });


    }
   

  }


  borrar(){
    console.log(this.heroe)
    if(!this.heroe){
      return;
    }

    this.heroesService.deleteHeroe(this.heroe)
    .subscribe(resp =>{
        this.router.navigate(['/heroes/listado']);
    })
  }

}
