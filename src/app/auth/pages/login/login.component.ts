import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../../interface/user.intarface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email : string = '';
  pass: string = ''



  constructor(private router: Router, private authService : AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.router.navigate(['./heroes'])
    }
  }


  logear(){
    this.authService.login(this.email,this.pass)
    .subscribe({
      next: (resp:any)=>{
        console.log(resp)
        if (resp.length === 0){
          this._snackBar.open("Mail o contraseña incorrectas", "OK",{duration: 5000});
          this.router.navigate(['./auth']);
        }else{
          localStorage.setItem('user',resp[0].usuario)
          localStorage.setItem('_id',resp[0].id)
          this.router.navigate(['./heroes']);
        }
        
      }, 
      error: (err) => this._snackBar.open(err, "OK",{duration: 5000})
    })
  }

  registrar(){
    this.router.navigate(['./auth/register'])
  }

}
