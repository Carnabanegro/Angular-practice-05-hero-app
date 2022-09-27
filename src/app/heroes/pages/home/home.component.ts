import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from 'src/app/auth/interface/user.intarface';

interface dataDialog{
  profile: User
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profile: User = {
    usuario : '',
    password : '',
    id: '',
    email: ''
  };
  
  constructor(private router:Router, private authService: AuthService,private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
        this.profile.usuario = localStorage.getItem('user') || "";
        this.profile.id = localStorage.getItem('_id') || "";
  }
      
  

  deslogear(){
    this.authService.logout();
    this._snackBar.open("Gracias , vuelva pronto <3", "OK",{duration: 5000});
    this.router.navigate(['./auth'])
  }


  editProfile(): void {
    const dialogRef = this.dialog.open(EditProfileDialog, {
      width: '250px',
      data: {profile: this.profile},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'app-home-dialog',
  templateUrl: 'home.component-dialog.html',
})
export class EditProfileDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: dataDialog,
    private authService : AuthService,
    private route : Router
  ) {}


  ngOnInit(): void {

      console.log(this.data)
      const id = localStorage.getItem('_id') || ""
      if (id.trim().length!==0) {

        this.authService.getForId(id).subscribe( (resp) => this.data.profile = resp)
    
      }
      
    }
   

  onClick(){

    if (this.data.profile.id){
      this.authService.updateProfile(this.data.profile,this.data.profile.id)
      .subscribe(resp => {
      
        this.authService.logout();
        this.dialogRef.close();
        this.route.navigate(['/auth'])
        
      })
    }
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}